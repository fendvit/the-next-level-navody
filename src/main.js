import './style.css'
import library from '../products.json'

/* The library lives in products.json at the repo root so a guide can be added
   without touching this file. The card numbers are just the position in that
   list, so inserting one renumbers the rest by itself. */
const products = library.map((product, index) => ({
  ...product,
  number: String(index + 1).padStart(2, '0')
}))

const INSTAGRAM = 'https://instagram.com/vitekfendrych'
/* The cross-link to the other half of the brand. It is in the header, the
   newsletter band and the footer; tnextlvl.com carries the mirror-image
   "Návody" link back here. Same-brand, so no target="_blank" — sending
   someone to a new tab to reach your own other page is a dead end with extra
   steps. */
const NEWSLETTER = 'https://www.tnextlvl.com/'

const categories = ['VŠE', ...new Set(products.map((p) => p.category))]

const titleCase = (value) => value.charAt(0) + value.slice(1).toLowerCase()

/* Everything out of products.json is interpolated into innerHTML below, and
   products.json is no longer only hand-written — the MCP connector commits to
   it too. So every field gets escaped on the way in: without this a title like
   `<img src=x onerror=...>` would run script on the domain the Instagram bio
   points at, which is a much worse failure than a badly worded guide. */
const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ESCAPES[char])

const guideCount = (count) =>
  count === 1 ? '1 návod' : count < 5 ? `${count} návody` : `${count} návodů`

/* The brand arrow. Butt caps and mitre joins — rounded ends turn it into a
   generic icon. Kept in sync with the newsletter site's components/Brand.tsx. */
const logo = () => `
  <span class="lockup">
    <svg viewBox="0 0 100 100" class="mark" fill="none" stroke="currentColor"
         stroke-width="9" stroke-linecap="butt" stroke-linejoin="miter" aria-hidden="true">
      <path d="M 7 93 L 87 13" />
      <path d="M 14 8 L 92 8 L 92 88" />
    </svg>
    <span class="wordmark">The Next Level</span>
  </span>
`

/* The marker sweep behind a headline phrase. The fill comes from the shared
   stylesheet (.hl svg path reads --text), NOT from an inline var(--accent) —
   that is what lets it invert by itself: bone sweep with ink letters on the
   dark half, ink sweep with bone letters on a light one.

   Written on one line on purpose: indenting the closing tags would put a
   whitespace text node between the phrase and the tail, which renders as
   "na jednom místě ." with a gap before the period. */
const SWEEP_PATH =
  'M1 6 C60 2 120 10 180 4 C232 1 268 8 299 3 L298 55 C250 58 198 51 148 57 C98 59 46 52 2 57 Z'

const highlight = (text, tail = '') =>
  `<span class="hl"><svg viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true"><path d="${SWEEP_PATH}" /></svg>${text}</span>` +
  (tail ? `<span class="hl-tail">${tail}</span>` : '')

document.querySelector('#app').innerHTML = `
  <header class="site-header glass">
    <div class="container header-inner">
      <a class="lockup-link" href="/" aria-label="THE NEXT LEVEL — domů">${logo()}</a>
      <nav class="nav" aria-label="Hlavní">
        <a class="nav-handle" href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">@vitekfendrych</a>
        <a href="${NEWSLETTER}">Newsletter</a>
        <a class="btn" href="#navody">Návody</a>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO — the dark half -->
    <section class="hero-section">
      <div class="container hero">
        <div class="hero-left">
          <span class="pill reveal">Knihovna návodů · Zdarma</span>
          <h1 class="reveal">Všechno, co jsem kdy natočil, ${highlight('na jednom místě', '.')}</h1>
          <p class="lede reveal">Čau čau, doufám, že se máš naprosto skvěle! Tady najdeš kompletní knihovnu všech mých rad a návodů, které jsem na Instagramu postoval a vytvářel. Věřím, že pomůžou i tobě.</p>
          <div class="hero-meta reveal">
            ${categories.slice(1).map((c) => `<span>${escapeHtml(titleCase(c))}</span>`).join('<span>·</span>')}
          </div>
        </div>

        <!-- The page's one beam. -->
        <aside class="beam hero-card reveal d1">
          <div class="beam-inner">
            <p class="card-eyebrow">Zdarma a bez registrace</p>
            <p class="card-big">${guideCount(products.length)}, které tě posunou dál.</p>
            <p class="card-note">Klikni na kterýkoliv návod a otevře se ti rovnou celý. Žádný e-mail, žádný háček.</p>
            <a class="btn" href="#navody">Projít knihovnu</a>
            <p class="fineprint">Nové návody přidávám průběžně. Sleduj <a href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">Instagram</a> nebo si nech posílat <a href="${NEWSLETTER}">newsletter</a>, ať ti žádný neunikne.</p>
          </div>
        </aside>
      </div>
    </section>

    <!-- THE LIBRARY — the bone half -->
    <section class="light" id="navody">
      <div class="container guides-inner">
        <div class="guides-head">
          <h2>Knihovna</h2>
          <p class="guides-count" id="count">${guideCount(products.length)}</p>
        </div>

        <div class="filters" id="filters">
          ${categories.map((c, i) => `
            <button class="pill filter" type="button" data-category="${escapeHtml(c)}" aria-pressed="${i === 0}">${escapeHtml(c)}</button>
          `).join('')}
        </div>

        <ul class="guides-grid" id="grid"></ul>
      </div>
    </section>

    <!-- NEWSLETTER — dark panel -->
    <section>
      <div class="container newsletter-inner">
        <div class="newsletter-panel">
          <div class="newsletter-copy">
            <span class="eyebrow reveal">Newsletter</span>
            <h2 class="reveal d1">Ať ti ${highlight('nic neuteče', '.')}</h2>
            <p class="lede reveal d2">Kromě návodů posílám jednou týdně e-mail THE NEXT LEVEL: co mi funguje, co jsem podělal, reálná čísla a zákulisí. Nové návody tam hlásím jako první.</p>
          </div>

          <div class="newsletter-action reveal d2">
            <a class="btn" href="${NEWSLETTER}">Odebírat newsletter</a>
            <p class="fineprint">Zdarma · Odhlášení jedním klikem</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CLOSING — bone again, so the page ends light -->
    <section class="light">
      <div class="container cta-inner">
        <span class="eyebrow reveal">A na závěr</span>
        <h2 class="reveal d1">Věřím, že ty to sakra dokážeš.</h2>
        <p class="cta-fineprint reveal d2">@vitekfendrych</p>
      </div>
    </section>
  </main>

  <footer class="site-footer light">
    <div class="container footer-inner">
      <span class="wordmark">The Next Level</span>
      <div class="footer-right">
        <a href="${NEWSLETTER}">Newsletter</a>
        <a href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a class="footer-credit" href="https://myve.media/" target="_blank" rel="noopener noreferrer">Vyvinulo MYVE.media</a>
      </div>
      <span class="footer-credit">© 2026 Vít Fendrych</span>
    </div>
  </footer>
`

const grid = document.querySelector('#grid')
const count = document.querySelector('#count')

const render = (category) => {
  const visible = category === 'VŠE'
    ? products
    : products.filter((p) => p.category === category)

  /* An <a> may contain flow content, so the title stays a real <h3> and the
     description a real <p>. That keeps the document outline usable by a
     screen reader while the whole card remains one hit area. */
  grid.innerHTML = visible.map((product) => `
    <li class="cell">
      <a class="card cell-link" href="${escapeHtml(product.link)}" target="_blank" rel="noopener noreferrer">
        <div class="card-panel">
          <span class="cell-n">${product.number}</span>
          <span class="cell-cat">${escapeHtml(product.category)}</span>
        </div>
        <div class="cell-body">
          <h3 class="cell-title">${escapeHtml(product.title)}</h3>
          <p class="cell-text">${escapeHtml(product.description)}</p>
          <span class="cell-cta">Otevřít →</span>
        </div>
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

render('VŠE')

/* ── MOTION ───────────────────────────────────────────────────────────────
   The same two page-wide behaviours the newsletter site runs: the entrance
   reveal, and the cursor-aware bloom inside .card.

   The bloom is delegated from the document rather than bound per card,
   because render() replaces the whole grid on every filter click — per-card
   listeners would be re-attached (or leak) each time. */
document.documentElement.classList.add('js')

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

document.addEventListener('pointermove', (event) => {
  const card = event.target.closest?.('.card')
  if (!card) return
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--x', `${event.clientX - rect.left}px`)
  card.style.setProperty('--y', `${event.clientY - rect.top}px`)
}, { passive: true })
