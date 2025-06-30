class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="header__img">
          <img class="img__header" src="/assets/matrix.jpg" alt="Imagem de fundo" />
        </div>
        <div class="header__logo">
          <a href="/">
            <img src="/assets/logo.png" alt="Logo MasterCode">
          </a>
        </div>
        <h1>Bem-vindo à Mastercode — Empresa de Software</h1>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/form-email">Contato</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("custom-header", HeaderComponent);
