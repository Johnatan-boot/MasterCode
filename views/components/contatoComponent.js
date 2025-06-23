class ContatoComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="contato">
        <h2>Contato</h2>
        <a href="./form-email.html"><p>Email: johnatan.quenes@gmail.com</p></a>
        <a href="https://web.whatsapp.com/+5511977653883"><p>Telefone: (11) 97765-3883</p></a>
      </section>
    `;
  }
}
customElements.define("contato-component", ContatoComponent);
