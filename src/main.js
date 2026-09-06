import './style.css'
import library from '../products.json'

/* The library lives in products.json at the repo root so the MCP connector
   (api/mcp/[...token].js) can append to it without touching this file. The
   card numbers are just the position in that list. */
const products = library.map((product, index) => ({
  ...product,
  number: String(index + 1).padStart(2, '0')
}))

const INSTAGRAM = 'https://instagram.com/vitekfendrych'
const NEWSLETTER = 'https://www.tnextlvl.com/'

const categories = ['VŠE', ...new Set(products.map((p) => p.category))]

const titleCase = (value) =>
  value.charAt(0) + value.slice(1).toLowerCase()

const guideCount = (count) =>
  count === 1 ? '1 návod' : count < 5 ? `${count} návody` : `${count} návodů`

/* The shared lockup: arrow mark plus wordmark, at 22px in the header and
   18px in the footer. Kept in sync with the newsletter site. */
const logo = (size = 'md') => `
  <span class="lockup">
    <svg viewBox="0 0 100 100" width="${size === 'md' ? 22 : 18}" height="${size === 'md' ? 22 : 18}"
         class="mark" fill="none" stroke="currentColor" stroke-width="9"
         stroke-linecap="butt" stroke-linejoin="miter" aria-hidden="true">
      <path d="M 7 93 L 87 13" />
      <path d="M 14 8 L 92 8 L 92 88" />
    </svg>
    <span class="wordmark${size === 'md' ? '' : ' wordmark-sm'}">THE NEXT <span class="wordmark-accent">LEVEL</span></span>
  </span>
`

/* The marker sweep behind a headline phrase. `tail` takes any punctuation
   that follows, so it paints above the sweep's right overhang.

   Written on one line on purpose: indenting the closing tags would put a
   whitespace text node between the phrase and the tail, which renders as
   "na jednom místě ." with a gap before the period. */
const SWEEP_PATH = 'M1 6 C60 2 120 10 180 4 C232 1 268 8 299 3 L298 55 C250 58 198 51 148 57 C98 59 46 52 2 57 Z'

const highlight = (text, tail = '') =>
  `<span class="hl"><svg viewBox="0 0 300 60" preserveAspectRatio="none" class="hl-sweep" aria-hidden="true"><path d="${SWEEP_PATH}" fill="var(--accent)" /></svg><span class="hl-text">${text}</span></span>` +
  (tail ? `<span class="hl-tail">${tail}</span>` : '')

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="lockup-link" href="/" aria-label="THE NEXT LEVEL — domů">${logo()}</a>
      <nav class="nav" aria-label="Hlavní">
        <a class="nav-handle" href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">@vitekfendrych</a>
        <a href="${NEWSLETTER}" target="_blank" rel="noopener noreferrer">Newsletter</a>
        <a class="nav-current" href="#navody" aria-current="page">Návody</a>
      </nav>
    </div>
  </header>

  <main>
    <section>
      <div class="container hero">
        <div class="hero-left">
          <span class="tag">Knihovna návodů</span>
          <h1 class="hero-headline">Všechno, co jsem kdy natočil, ${highlight('na jednom místě', '.')}</h1>
          <p class="hero-lede">Čau čau, doufám, že se máš naprosto skvěle! Tady najdeš kompletní knihovnu všech mých rad a návodů, které jsem na Instagramu postoval a vytvářel. Věřím, že pomůžou i tobě.</p>
          <div class="hero-meta">
            ${categories.slice(1).map((c) => `<span>${titleCase(c)}</span>`).join('<span>·</span>')}
          </div>
        </div>

        <aside class="hero-card">
          <p class="card-eyebrow">Zdarma a bez registrace</p>
          <p class="card-big">${guideCount(products.length)}, které tě posunou dál.</p>
          <p class="card-note">Klikni na kterýkoliv návod a otevře se ti rovnou celý. Žádný e-mail, žádný háček.</p>
          <a class="button" href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">Sleduj na Instagramu</a>
          <p class="card-fine">Nové návody přidávám průběžně. Sleduj Instagram nebo si nech posílat <a href="${NEWSLETTER}" target="_blank" rel="noopener noreferrer">newsletter</a>, ať ti žádný neunikne.</p>
        </aside>
      </div>
    </section>

    <section class="guides" id="navody">
      <div class="container guides-inner">
        <div class="guides-head">
          <h2 class="guides-title">Knihovna</h2>
          <p class="guides-count" id="count">${guideCount(products.length)}</p>
        </div>

        <div class="filters" id="filters">
          ${categories.map((c, i) => `
            <button class="filter" type="button" data-category="${c}" aria-pressed="${i === 0}">${c}</button>
          `).join('')}
        </div>

        <ul class="guides-grid" id="grid"></ul>
      </div>
    </section>

    <section class="newsletter">
      <div class="container newsletter-inner">
        <div class="newsletter-copy">
          <p class="eyebrow">Newsletter</p>
          <h2 class="newsletter-headline">Ať ti ${highlight('nic neuteče', '.')}</h2>
          <p class="newsletter-lede">Kromě návodů posílám jednou týdně e-mail THE NEXT LEVEL: co mi funguje, co jsem podělal, reálná čísla a zákulisí. Nové návody tam hlásím jako první.</p>
        </div>

        <div class="newsletter-action">
          <a class="button" href="${NEWSLETTER}" target="_blank" rel="noopener noreferrer">Odebírat newsletter</a>
          <p class="card-fine">Zdarma · Odhlášení jedním klikem</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container cta-inner">
        <p class="eyebrow">A na závěr</p>
        <h2 class="cta-headline">Věřím, že ty to sakra dokážeš.</h2>
        <p class="cta-fineprint">@vitekfendrych</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      ${logo('sm')}
      <div class="footer-right">
        <a href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">@vitekfendrych</a>
        <a href="${NEWSLETTER}" target="_blank" rel="noopener noreferrer">Newsletter</a>
        <a class="footer-credit" href="https://myve.media/" target="_blank" rel="noopener noreferrer">Vyvinulo MYVE.media</a>
      </div>
    </div>
  </footer>
`

const grid = document.querySelector('#grid')
const count = document.querySelector('#count')

const render = (category) => {
  const visible = category === 'VŠE'
    ? products
    : products.filter((p) => p.category === category)

  grid.innerHTML = visible.map((product) => `
    <li class="cell">
      <a class="cell-link" href="${product.link}" target="_blank" rel="noopener noreferrer">
        <span class="cell-top">
          <span class="cell-n">${product.number}</span>
          <span class="cell-cat">${product.category}</span>
        </span>
        <h3 class="cell-title">${product.title}</h3>
        <p class="cell-body">${product.description}</p>
        <span class="cell-cta">Otevřít →</span>
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
