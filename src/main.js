import './style.css'

const products = [
  {
    number: "01",
    category: "MINDSET",
    title: "3 VĚCI KTERÉ POTŘEBUJEŠ VĚDĚT",
    description: "Základní pilíře pro tvůj osobní rozvoj. Bez těhle tří věcí se nikam neposuneš.",
    link: "https://drive.google.com/file/d/1mrjTNKxe-DdUijyVpzlrm8plJToVCEFs/view?usp=sharing"
  },
  {
    number: "02",
    category: "WORKOUT",
    title: "MOJE PRVNÍ WORKOUT RUTINA",
    description: "Tohle je přesně ten trénink, se kterým jsem začínal. Jednoduchý, ale extrémně účinný.",
    link: "https://drive.google.com/file/d/1mrjTNKxe-DdUijyVpzlrm8plJToVCEFs/view?usp=sharing"
  },
  {
    number: "03",
    category: "MINDSET",
    title: "3 RADY NA ULTRAMARATHON",
    description: "Jak se mentálně a fyzicky připravit na extrémní zátěž. Posuň svoje limity.",
    link: "https://drive.google.com/file/d/1Phdi6lwXOC7pvUPep3A34c9nFmx2rFih/view?usp=drive_link"
  },
  {
    number: "04",
    category: "MINDSET",
    title: "3 LEKCE Z 90. DENNÍ VÝZVY",
    description: "Co jsem se naučil po třech měsících konzistentní práce. Brutální shift v hlavě.",
    link: "https://drive.google.com/file/d/17697nhHEhhyEl3efOLILn8Vj5NODbntf/view?usp=drive_link"
  },
  {
    number: "05",
    category: "MINDSET",
    title: "5 PASTÍ V HLAVĚ",
    description: "Nejčastější mentální bloky, které tě drží zpátky, a jak se jich konečně zbavit.",
    link: "https://drive.google.com/file/d/1PfvWdJP1Bhz-lRYaRiCohKhFRTw4eQoN/view?usp=drive_link"
  },
  {
    number: "06",
    category: "MINDSET",
    title: "6 VĚCÍ NA LEPŠÍ ŽIVOT",
    description: "Pár jednoduchých změn, které dramaticky zlepší kvalitu tvého každodenního života.",
    link: "https://drive.google.com/file/d/1ezz2-jHcdu1CmGy8Vlkb5y7y5GMLZ_ib/view?usp=drive_link"
  },
  {
    number: "07",
    category: "MINDSET",
    title: "JAK DĚLAT VĚCI KDYŽ SE TI NECHCE",
    description: "Praktický návod na to, jak porazit prokrastinaci a budovat železnou disciplínu.",
    link: "https://drive.google.com/file/d/17neV3QQgXhN7yObfz9igVZ9KXgLvH73s/view?usp=drive_link"
  },
  {
    number: "08",
    category: "WORKOUT",
    title: "MOJE WORKOUT RUTINA",
    description: "Můj aktuální tréninkový plán. Přesně to, co dělám každý týden pro maximální progres.",
    link: "https://drive.google.com/file/d/1h-vwQ_IE_aFpSuE3XpsKbIAWosMIr_y4/view?usp=drive_link"
  },
  {
    number: "09",
    category: "MINDSET",
    title: "ZAČNI TEĎ NE ZÍTRA",
    description: "Přestaň čekat na ideální moment. Návod, jak udělat první krok hned teď.",
    link: "https://drive.google.com/file/d/1bvwkXXXPMWrRcvh8SJeyqkoNI3lRO1aT/view?usp=drive_link"
  },
  {
    number: "10",
    category: "WORKOUT",
    title: "JAK NA FRONTLEVER",
    description: "Kompletní progrese a cviky, které tě dovedou k perfektnímu frontleveru.",
    link: "https://drive.google.com/file/d/1pBSvJF1eZ8RhFWeOadClaXXQRzKlovRJ/view?usp=drive_link"
  },
  {
    number: "11",
    category: "MINDSET",
    title: "KDE BERU TOLIK ENERGIE",
    description: "Moje tajemství na celodenní focus a energii bez kofeinových crashů.",
    link: "https://drive.google.com/file/d/1NxsvGcDPGNe2Jg-Orm5nu8mL_tLLBwjV/view?usp=drive_link"
  },
  {
    number: "12",
    category: "MINDSET",
    title: "5 VĚCÍ KTERÉ TĚ ZMĚNÍ",
    description: "Pět naprosto zásadních návyků, které od základů překopou tvůj život.",
    link: "https://drive.google.com/file/d/1CypipkvSu_zqFk97-B3rHPCCOU5fnTb3/view?usp=drive_link"
  },
  {
    number: "13",
    category: "KNIHY",
    title: "KNIHY KTERÉ MĚ ZMĚNILY",
    description: "Moje osobní knihovna. Seznam knih, které nejvíc formovaly můj mindset.",
    link: "https://drive.google.com/file/d/1qPbGbg5yuhNAA-E27OfoAUDtJADkqdyj/view?usp=drive_link"
  },
  {
    number: "14",
    category: "MINDSET",
    title: "VĚTŠÍ SEBEVĚDOMÍ",
    description: "Praktické kroky k tomu, abys konečně přestal pochybovat sám o sobě.",
    link: "https://drive.google.com/file/d/1oGgb0FPaqQRVXf7OunzoSttzMo875ODJ/view?usp=drive_link"
  }
];

document.querySelector('#app').innerHTML = `
  <main class="container">
    <header class="header">
      <p class="subtitle">@FENDR.CALIS — MINDSET GUIDE</p>
      <h1 class="title">TOHLE CHCEŠ!</h1>
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
