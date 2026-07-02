import './style.css'

const products = [
  {
    number: "01",
    category: "APLIKACE",
    title: "ONE SEC",
    description: "Moje první opatření byla aplikace One Sec — zdarma, jednoduchá, efektivní. Stačí ji nainstalovat, povolit oprávnění a zaškrtnout Instagram. To je vše.",
    link: "#"
  },
  {
    number: "02",
    category: "SYSTÉM",
    title: "RANNÍ FOCUS MODE",
    description: "Celé prázdniny jsem si začal dávat jedno pravidlo: dopoledne budu mít co nejmenší čas na telefonu. Nastavil jsem si focus mode — a telefon byl prakticky mimo hru.",
    link: "#"
  },
  {
    number: "03",
    category: "PRINCIP Č. 1",
    title: "DENÍK ŠAMPIONA",
    description: "Vezmi si jakýkoliv deník nebo sešit a napiš si do něj každou svoji výhru. Úplně každou. Od toho, že ses dostal na základku, až po úplně každý tvůj úspěch.",
    link: "#"
  },
  {
    number: "04",
    category: "PRINCIP Č. 2",
    title: "ZAČNI CVIČIT",
    description: "Další věc, kterou jsem začal dělat pro svoje sebevědomí, je ta úplně nejjednodušší: začal jsem cvičit.",
    link: "#"
  },
  {
    number: "05",
    category: "PRINCIP Č. 3",
    title: "DĚLEJ TO, CO SE TI NECHCE",
    description: "Každý den jsem udělal něco, do čeho se mi fakt nechtělo. Ze začátku to pro mě byla studená sprcha.",
    link: "#"
  }
];

document.querySelector('#app').innerHTML = `
  <main class="container">
    <header class="header">
      <p class="subtitle">@FENDR.CALIS — MINDSET GUIDE</p>
      <h1 class="title">TOHO CHCEŠ?</h1>
      <p class="description">Tímhle způsobem jsem se dokázal posunout ze super průměrného a úplně "random" kluka na člověka, který si momentálně jde za svými sny a snaží se na nich pracovat.</p>
    </header>
    
    <div class="product-list" id="product-list">
      ${products.map((product, index) => `
        <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="product-card" style="animation-delay: ${index * 100}ms">
          <div class="product-number">${product.number}</div>
          <div class="product-content">
            <span class="product-category">${product.category}</span>
            <h2 class="product-title">${product.title}</h2>
            <p class="product-desc">${product.description}</p>
          </div>
        </a>
      `).join('')}
    </div>

    <footer class="footer">
      <h2 class="footer-title">VĚŘÍM, ŽE TY TO<br><span class="highlight">SAKRA DOKÁŽEŠ.</span></h2>
    </footer>
  </main>
`
