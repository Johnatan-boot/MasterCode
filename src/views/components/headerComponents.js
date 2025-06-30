class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="header__img">
          <img class="img__header" src="public/assets/matrix.jpg" alt="Imagem de fundo" />
        </div>
        <div class="header__logo">
          <a href="/">
            <img src="public/assets/logo.png" alt="Logo MasterCode">
          </a>
        </div>
        <h1>Bem-vindo à Mastercode — Empresa de Software</h1>
        <nav>
          <ul>
            <li><a href="/views/home">Home</a></li>
            <li><a href="/views/servicos">Serviços</a></li>
            <li><a href="/views/form-email">Contato</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("custom-header", HeaderComponent);
