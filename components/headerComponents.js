class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header>
      <div class="header__img">
        <img class="img__header" src="/assets/matrix.jpg" alt="" />
      </div>
        <div class="header__logo">
          <a href="#">
                     <img src="/assets/logo.png" alt="logo">

          </a>
        </div>
        </div>
       </div>
      <h1>Bem-vindo à Mastercode empresa de software</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/views/servicos.html">Serviços</a></li>
          <li><a href="/views/form-email.html">Contato</a></li>
        </ul>
      </nav>

    </header>
        `;
  }
}

customElements.define("custom-header", HeaderComponent);
