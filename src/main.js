import './style.css'

const products = [
  {
    number: "01",
    category: "MINDSET",
    title: "3 věci, které potřebuješ vědět",
    description: "Základní pilíře pro tvůj osobní rozvoj. Bez těhle tří věcí se nikam neposuneš.",
    link: "https://drive.google.com/file/d/1mrjTNKxe-DdUijyVpzlrm8plJToVCEFs/view?usp=sharing"
  },
  {
    number: "02",
    category: "WORKOUT",
    title: "Moje první workout rutina",
    description: "Tohle je přesně ten trénink, se kterým jsem začínal. Jednoduchý, ale extrémně účinný.",
    link: "https://drive.google.com/file/d/1mrjTNKxe-DdUijyVpzlrm8plJToVCEFs/view?usp=sharing"
  },
  {
    number: "03",
    category: "MINDSET",
    title: "3 rady na ultramaraton",
    description: "Jak se mentálně a fyzicky připravit na extrémní zátěž. Posuň svoje limity.",
    link: "https://drive.google.com/file/d/1Phdi6lwXOC7pvUPep3A34c9nFmx2rFih/view?usp=drive_link"
  },
  {
    number: "04",
    category: "MINDSET",
    title: "3 lekce z 90denní výzvy",
    description: "Co jsem se naučil po třech měsících konzistentní práce. Brutální shift v hlavě.",
    link: "https://drive.google.com/file/d/17697nhHEhhyEl3efOLILn8Vj5NODbntf/view?usp=drive_link"
  },
  {
    number: "05",
    category: "MINDSET",
    title: "5 pastí v hlavě",
    description: "Nejčastější mentální bloky, které tě drží zpátky, a jak se jich konečně zbavit.",
    link: "https://drive.google.com/file/d/1PfvWdJP1Bhz-lRYaRiCohKhFRTw4eQoN/view?usp=drive_link"
  },
  {
    number: "06",
    category: "MINDSET",
    title: "6 věcí na lepší život",
    description: "Pár jednoduchých změn, které dramaticky zlepší kvalitu tvého každodenního života.",
    link: "https://drive.google.com/file/d/1ezz2-jHcdu1CmGy8Vlkb5y7y5GMLZ_ib/view?usp=drive_link"
  },
  {
    number: "07",
    category: "MINDSET",
    title: "Jak dělat věci, když se ti nechce",
    description: "Praktický návod na to, jak porazit prokrastinaci a budovat železnou disciplínu.",
    link: "https://drive.google.com/file/d/17neV3QQgXhN7yObfz9igVZ9KXgLvH73s/view?usp=drive_link"
  },
  {
    number: "08",
    category: "WORKOUT",
    title: "Moje workout rutina",
    description: "Můj aktuální tréninkový plán. Přesně to, co dělám každý týden pro maximální progres.",
    link: "https://drive.google.com/file/d/1h-vwQ_IE_aFpSuE3XpsKbIAWosMIr_y4/view?usp=drive_link"
  },
  {
    number: "09",
    category: "MINDSET",
    title: "Začni teď, ne zítra",
    description: "Přestaň čekat na ideální moment. Návod, jak udělat první krok hned teď.",
    link: "https://drive.google.com/file/d/1bvwkXXXPMWrRcvh8SJeyqkoNI3lRO1aT/view?usp=drive_link"
  },
  {
    number: "10",
    category: "WORKOUT",
    title: "Jak na front lever",
    description: "Kompletní progrese a cviky, které tě dovedou k perfektnímu frontleveru.",
    link: "https://drive.google.com/file/d/1pBSvJF1eZ8RhFWeOadClaXXQRzKlovRJ/view?usp=drive_link"
  },
  {
    number: "11",
    category: "MINDSET",
    title: "Kde beru tolik energie",
    description: "Moje tajemství na celodenní focus a energii bez kofeinových crashů.",
    link: "https://drive.google.com/file/d/1NxsvGcDPGNe2Jg-Orm5nu8mL_tLLBwjV/view?usp=drive_link"
  },
  {
    number: "12",
    category: "MINDSET",
    title: "5 věcí, které tě změní",
    description: "Pět naprosto zásadních návyků, které od základů překopou tvůj život.",
    link: "https://drive.google.com/file/d/1CypipkvSu_zqFk97-B3rHPCCOU5fnTb3/view?usp=drive_link"
  },
  {
    number: "13",
    category: "KNIHY",
    title: "Knihy, které mě změnily",
    description: "Moje osobní knihovna. Seznam knih, které nejvíc formovaly můj mindset.",
    link: "https://drive.google.com/file/d/1qPbGbg5yuhNAA-E27OfoAUDtJADkqdyj/view?usp=drive_link"
  },
  {
    number: "14",
    category: "MINDSET",
    title: "Větší sebevědomí",
    description: "Praktické kroky k tomu, abys konečně přestal pochybovat sám o sobě.",
    link: "https://drive.google.com/file/d/1oGgb0FPaqQRVXf7OunzoSttzMo875ODJ/view?usp=drive_link"
  },
  {
    number: "15",
    category: "MINDSET",
    title: "Přeprogramuj hlavu",
    description: "Kompletní návod na to, jak přeprogramovat svoje myšlení a dokázat cokoliv si zamaneš.",
    link: "https://drive.google.com/file/d/1Q37Padmj8hJ7XGORvVfOVdvC8xwuLp7G/view?usp=sharing"
  },
  {
    number: "16",
    category: "MINDSET",
    title: "Ultramaraton",
    description: "Moje další rady a tipy k tomu, jak se mentálně připravit na překonávání vlastních limitů.",
    link: "https://drive.google.com/file/d/1f3Ypv-n4lUGyxBhUDFrh6PSV10f7tcVJ/view?usp=sharing"
  }
];

const INSTAGRAM = 'https://www.instagram.com/fendr.calis/'
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
    <span class="wordmark${size === 'md' ? '' : ' wordmark-sm'}">FENDR<span class="wordmark-accent">.CALIS</span></span>
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
      <a class="lockup-link" href="/" aria-label="Fendr.calis — domů">${logo()}</a>
      <nav class="nav" aria-label="Hlavní">
        <a class="nav-handle" href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">@fendr.calis</a>
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
        <p class="cta-fineprint">@fendr.calis</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      ${logo('sm')}
      <div class="footer-right">
        <a href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">@fendr.calis</a>
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
