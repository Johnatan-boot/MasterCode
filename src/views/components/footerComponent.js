class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>&copy; 2025 Empresa de Software - Todos os direitos reservados.</p>
      </footer>
    `;
  }
}
customElements.define("footer-component", FooterComponent);
