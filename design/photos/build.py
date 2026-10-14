"""Web derivatives of Vít's photos for navody.tnextlvl.com.

Same script as the_next_level/design/photos/build.py; only CROPS differs.

Originals live outside the repo, in AI-OS\\brand\\FOTKY\\ (never committed).
For each entry in CROPS this writes public/<name>-<width>.jpg:

  · EXIF rotation baked into the pixels (phone files are often stored
    landscape + an orientation tag; see README "Portrait assets")
  · cropped to the slot's aspect ratio around a focal box chosen by eye
  · resized with Lanczos — downscale only, never upscaled
  · progressive JPEG, q≈80, NO metadata at all (no EXIF, no GPS, no ICC)

Run from the repo root:

    python -I design/photos/build.py "C:\\AI-OS\\brand\\FOTKY"

Needs only Pillow. Not part of the app build and not an npm dependency.
"""

import os
import sys

from PIL import Image, ImageOps

# name: (source file, crop box as fractions of the upright image
#        (left, top, right, bottom), output widths, JPEG quality)
CROPS = {
    # Hero, 4:5. Lying back in tall grass at sunrise, hands behind his head
    # (4. 7. 2026). Cut in from the sides so he and the low sun share the
    # upper half instead of a field of grass.
    "sunrise-grass": (
        "východ slunce v trávš lšžím inspoirtivní.jpg",
        (0.18, 0.02, 0.96, 0.7512),
        # 1200, not 1440: the grass is all fine detail and costs bytes — the
        # 1440 file was 338 kB, over the 250 kB hero budget. The slot is
        # ~550 css px on a laptop, so 1200 still covers a 2x screen.
        (640, 960, 1200),
        72,
    ),
}


def crop(img, box):
    w, h = img.size
    l, t, r, b = box
    return img.crop((round(l * w), round(t * h), round(r * w), round(b * h)))


def main(src_dir, out_dir="public"):
    for name, (file, box, widths, quality) in CROPS.items():
        with Image.open(os.path.join(src_dir, file)) as raw:
            img = ImageOps.exif_transpose(raw).convert("RGB")
        img = crop(img, box)
        for width in widths:
            if width > img.width:
                raise SystemExit(f"{name}: {width}px would upscale a {img.width}px crop")
            height = round(img.height * width / img.width)
            out = img.resize((width, height), Image.LANCZOS)
            path = os.path.join(out_dir, f"{name}-{width}.jpg")
            # A fresh image carries no info dict, so nothing from the
            # original (EXIF, GPS, maker notes, ICC) can ride along.
            clean = Image.new("RGB", out.size)
            clean.paste(out)
            clean.save(path, "JPEG", quality=quality, progressive=True, optimize=True)
            print(f"{path}  {width}x{height}  {os.path.getsize(path) // 1024} kB")


if __name__ == "__main__":
    main(sys.argv[1])
