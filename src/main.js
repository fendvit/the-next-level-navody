import './style.css'
import library from '../products.json'

/* The library lives in products.json at the repo root so a guide can be added
   without touching this file. The numbers are just the position in that list,
   so inserting one renumbers the rest by itself. */
const products = library.map((product, index) => ({
  ...product,
  number: String(index + 1).padStart(2, '0')
}))

const INSTAGRAM = 'https://instagram.com/vitekfendrych'
/* The cross-link to the other half of the brand. Same-brand, so no
   target="_blank" — sending someone to a new tab to reach your own other page
   is a dead end with extra steps.

   ?z=navody tags every signup that comes through here — tnextlvl.com writes it
   into the Ecomail source, so the list can tell guide readers apart. Since
   2026-10-14 the signup page is /newsletter (the root became the hub), so the
   link goes straight there instead of through the hub. */
const NEWSLETTER = 'https://www.tnextlvl.com/newsletter?z=navody'
const HUB = 'https://www.tnextlvl.com/'
const MYVE = 'https://myve.media/'

/* Categories come from products.json in capitals (MINDSET, WORKOUT, KNIHY).
   v4 never sets anything in capitals, so they are shown in sentence case;
   the data itself is left alone — the MCP connector writes it that way. */
const ALL = 'VŠE'
const categories = [ALL, ...new Set(products.map((p) => p.category))]
const label = (value) => value.charAt(0) + value.slice(1).toLowerCase()

/* Everything out of products.json is interpolated into innerHTML below, and
   products.json is not only hand-written — the MCP connector commits to it
   too. So every field gets escaped on the way in: without this a title like
   `<img src=x onerror=...>` would run script on the domain the Instagram bio
   points at, which is a much worse failure than a badly worded guide. */
const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ESCAPES[char])

const guideCount = (count) =>
  count === 1 ? '1 návod' : count < 5 ? `${count} návody` : `${count} návodů`

/* The three-stroke mark — the newsletter site's components/Brand.tsx <Mark>.
   Butt caps and mitre joins; rounded ends turn it into a generic icon. */
const mark = () => `
  <svg viewBox="0 0 48 48" class="mark-svg" aria-hidden="true">
    <path d="M8 8H40V40" /><path d="M40 8L17.37 30.63" />
  </svg>`

const wordmark = () => `<span class="wordmark">${mark()}The Next Level</span>`

/* The UI arrow — the newsletter site's <Arrow>: two strokes, never a font
   glyph. Turned with the `rotate` property, not `transform`, so the hover
   nudge (a transform) composes with it. */
const arrow = (dir = 'forward') => {
  const turn = dir === 'down' ? ' style="rotate: 90deg"' : ''
  return `<svg class="arrow" viewBox="0 0 16 16" aria-hidden="true"${turn}><path d="M1 8h13M9 3l5 5-5 5" /></svg>`
}

/* The emphasised phrase: --brand text, the punctuation after it stays ink.
   Written on one line so no whitespace node lands before the full stop. */
const highlight = (text, tail = '') =>
  `<span class="hl">${text}</span>` + (tail ? `<span class="hl-tail">${tail}</span>` : '')

/* The headline resolves word by word (.bt in the design system). Each word is
   its own span with a staggered delay; the space between them stays a text
   node outside the spans, so the line still wraps normally. */
const words = (text, start = 0) =>
  text
    .split(' ')
    .map((word, i) => `<span style="animation-delay:${(0.06 + (start + i) * 0.045).toFixed(3)}s">${word}</span>`)
    .join(' ')

const headlineLead = 'Všechno, co jsem kdy natočil,'
const headlineMark = 'na jednom místě'
const leadCount = headlineLead.split(' ').length

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container nav">
      <a class="nav-brand" href="${HUB}" aria-label="The Next Level — rozcestník">${wordmark()}</a>
      <nav class="nav-right" aria-label="Hlavní">
        <a class="nav-link hide-sm" href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">@vitekfendrych</a>
        <a class="nav-link" href="${NEWSLETTER}">Nedělní mail</a>
        <a class="btn small" href="#navody">Projít návody</a>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO — masthead line, headline, lede, the way in; his photo beside. -->
    <section class="hero">
      <div class="container">
        <div class="masthead rise">
          <span class="mono">Knihovna návodů</span>
          <span class="masthead-rule" aria-hidden="true"></span>
          <span class="mono">${guideCount(products.length)} · zdarma</span>
        </div>

        <div class="hero-grid">
          <div class="hero-copy">
            <h1 class="bt">${words(headlineLead)} <span class="hl">${words(headlineMark, leadCount)}</span><span class="hl-tail">.</span></h1>
            <!-- His text from the v3 page, unchanged. -->
            <p class="lede rise d2">Čau čau, doufám, že se máš naprosto skvěle! Tady najdeš kompletní knihovnu všech mých rad a návodů, které jsem na Instagramu postoval a vytvářel. Věřím, že pomůžou i tobě.</p>
            <div class="hero-actions rise d3">
              <a class="btn" href="#navody">Projít knihovnu ${arrow('down')}</a>
            </div>
            <p class="fineprint rise d4">Nové návody přidávám průběžně a ukazuju je v reelech na <a href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">Instagramu</a>, tak ho sleduj, ať ti žádný neunikne.</p>
          </div>

          <!-- AI-OS\\brand\\FOTKY\\, 4. 7. 2026; design/photos/build.py. -->
          <figure class="hero-photo rise d1">
            <div class="photo-frame">
              <img
                src="/sunrise-grass-960.jpg"
                srcset="/sunrise-grass-640.jpg 640w, /sunrise-grass-960.jpg 960w, /sunrise-grass-1200.jpg 1200w"
                sizes="(min-width: 1000px) 38vw, calc(100vw - 40px)"
                alt="Vítek leží v trávě s rukama za hlavou a dívá se na východ slunce nad kopci"
                width="960"
                height="1200"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </figure>
        </div>

        <!-- Facts strip: what the library is, in four numbers-and-words. -->
        <dl class="facts">
          <div class="fact reveal">
            <dt class="mono">Návody</dt>
            <dd><b>${products.length}</b><span>v knihovně</span></dd>
          </div>
          <div class="fact reveal d1">
            <dt class="mono">Cena</dt>
            <dd><b>0 Kč</b><span>bez registrace</span></dd>
          </div>
          <div class="fact reveal d2">
            <dt class="mono">Otevřeš</dt>
            <dd><b>1 klik</b><span>žádný e-mail</span></dd>
          </div>
          <div class="fact reveal d3">
            <dt class="mono">Témata</dt>
            <dd><b>${categories.length - 1}</b><span>${categories.slice(1).map((c) => escapeHtml(label(c).toLowerCase())).join(', ')}</span></dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- THE LIBRARY — a hairline-ruled numbered index, like the issue index
         on tnextlvl.com. Two columns on a laptop, one on a phone. -->
    <section class="section library" id="navody">
      <div class="container">
        <header class="split-head">
          <div>
            <p class="eyebrow reveal">Zdarma a bez registrace</p>
            <h2 class="reveal d1">Knihovna.</h2>
          </div>
          <p class="lede reveal d2">Klikni na kterýkoliv návod a otevře se ti rovnou celý. Žádný e-mail, žádný háček.</p>
        </header>

        <div class="filter-row reveal">
          <div class="filters" id="filters" role="group" aria-label="Témata">
            ${categories.map((c, i) => `
              <button class="filter" type="button" data-category="${escapeHtml(c)}" aria-pressed="${i === 0}">${escapeHtml(label(c))}</button>
            `).join('')}
          </div>
          <p class="mono guides-count" id="count" aria-live="polite">${guideCount(products.length)}</p>
        </div>

        <ol class="guides" id="grid"></ol>
      </div>
    </section>

    <!-- NEWSLETTER — the page's one ink band. -->
    <section class="section ink newsletter">
      <div class="container newsletter-grid">
        <div class="newsletter-copy">
          <p class="eyebrow reveal">Nedělní mail</p>
          <h2 class="reveal d1">Každou neděli ${highlight('jeden mail', '.')}</h2>
          <!-- "Kromě návodů" + his own line from the tnextlvl.com hero
               (2026-10-14), so the two sites promise the same mail. -->
          <p class="lede reveal d2">Kromě návodů ti každou neděli ráno napíšu 1&nbsp;zkušenost z mojí cesty na Ironmana a 200&nbsp;km běh.</p>
        </div>

        <div class="newsletter-action reveal d2">
          <a class="btn" href="${NEWSLETTER}">Odebírat nedělní mail ${arrow()}</a>
          <p class="fineprint">Zdarma · V každým mailu se dá odhlásit</p>
        </div>
      </div>
    </section>

    <!-- CLOSING — his line, in the serif that only carries his words. -->
    <section class="section closing">
      <div class="container closing-inner">
        <p class="eyebrow reveal">A na závěr</p>
        <p class="closing-line voice reveal d1">Věřím, že ty to sakra dokážeš.</p>
        <p class="mono reveal d2">@vitekfendrych</p>
      </div>
    </section>
  </main>

  <footer class="site-footer sunk">
    <div class="container">
      <a class="foot-word" href="${HUB}" aria-label="The Next Level — rozcestník">${wordmark()}</a>

      <div class="foot-cols">
        <p class="foot-line">Každou neděli ráno jeden mail.</p>
        <div>
          <h4 class="mono">Menu</h4>
          <ul>
            <li><a href="#navody">Návody</a></li>
            <li><a href="${NEWSLETTER}">Nedělní mail</a></li>
            <li><a href="${HUB}">Rozcestník</a></li>
          </ul>
        </div>
        <div>
          <h4 class="mono">Kontakt</h4>
          <ul>
            <li><a href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">Instagram @vitekfendrych</a></li>
          </ul>
        </div>
      </div>

      <div class="foot-legal mono">
        <span>© 2026 Vít Fendrych</span>
        <a href="${MYVE}" target="_blank" rel="noopener noreferrer">Web: MYVE.media</a>
      </div>
    </div>
  </footer>
`

const grid = document.querySelector('#grid')
const count = document.querySelector('#count')

const render = (category) => {
  const visible = category === ALL
    ? products
    : products.filter((p) => p.category === category)

  /* The link is stretched over the whole row (.guide-link::after), so the row
     is the hit area while the title stays a real <h3> and the description a
     real <p> for screen readers. */
  grid.innerHTML = visible.map((product) => `
    <li class="guide">
      <p class="guide-meta mono">
        <span>${product.number}</span>
        <span>${escapeHtml(label(product.category))}</span>
      </p>
      <div class="guide-main">
        <h3 class="guide-title">${escapeHtml(product.title)}</h3>
        <p class="guide-text">${escapeHtml(product.description)}</p>
      </div>
      <a class="guide-link" href="${escapeHtml(product.link)}" target="_blank" rel="noopener noreferrer">
        <span>Otevřít</span>${arrow()}
        <span class="sr-only">: ${escapeHtml(product.title)}</span>
      </a>
    </li>
  `).join('')

  count.textContent = guideCount(visible.length)
}

document.querySelector('#filters').addEventListener('click', (event) => {
  const button = event.target.closest('.filter')
  if (!button) return

  for (const filter of document.querySelectorAll('.filter')) {
    filter.setAttribute('aria-pressed', String(filter === button))
  }
  render(button.dataset.category)
})

render(ALL)

/* ── MOTION ───────────────────────────────────────────────────────────────
   The newsletter site's two page-wide behaviours: the entrance reveal for
   .reveal (below the fold; above it, .rise runs in pure CSS), and the header
   hairline once the page has scrolled. The v3 cursor bloom inside cards is
   gone with the cards that had it.

   The guide rows are rendered after this runs on every filter click, so they
   are not .reveal — a row that waits for an observer after a click reads as
   lag, not as motion. */
const root = document.documentElement
/* `.js` itself is set in index.html's head, before first paint. */

const revealables = document.querySelectorAll('.reveal')

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in')
        io.unobserve(entry.target)
      }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 })

  for (const el of revealables) io.observe(el)
} else {
  for (const el of revealables) el.classList.add('is-in')
}

let frame = 0
const onScroll = () => {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    root.toggleAttribute('data-scrolled', window.scrollY > 8)
  })
}
onScroll()
addEventListener('scroll', onScroll, { passive: true })
