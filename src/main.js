import './style.css'

// You can easily update this array with your digital products
const products = [
  {
    title: "Example Product 1",
    description: "An incredible digital resource to help you achieve your goals faster.",
    link: "#",
    icon: "🚀"
  },
  {
    title: "Example Product 2",
    description: "A comprehensive guide filled with actionable insights and strategies.",
    link: "#",
    icon: "📖"
  },
  {
    title: "Example Product 3",
    description: "Premium templates to save you hours of work and boost productivity.",
    link: "#",
    icon: "✨"
  }
];

document.querySelector('#app').innerHTML = `
  <main class="container">
    <div class="glass-panel">
      <header class="header">
        <div class="profile-avatar"></div>
        <h1 class="title">My Digital Products</h1>
        <p class="subtitle">Explore my latest creations and resources.</p>
      </header>
      
      <div class="product-list" id="product-list">
        ${products.map((product, index) => `
          <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="product-card" style="animation-delay: ${index * 100}ms">
            <div class="product-icon">${product.icon}</div>
            <div class="product-info">
              <h2 class="product-title">${product.title}</h2>
              <p class="product-description">${product.description}</p>
            </div>
            <div class="product-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  </main>
`
