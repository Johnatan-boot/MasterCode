class ServicosComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="servicos">
        <h2>Nossos Serviços</h2>
        <p>Oferecemos desenvolvimento de software, consultoria tecnológica e suporte técnico.</p>
        <div class="row g-4 justify-content-center"> 
          <div class="col-md-4">
              <custom-card image="https://ts4.mm.bing.net/th?id=OIP.nh4rUO6uSdBUQQMJnEUsmQHaE7&pid="
                  title="Desenvolvimento Web"
                  description="Criamos sites modernos, responsivos e personalizados para você.">
              </custom-card>
          </div>
          <div class="col-md-4">
              <custom-card image="https://ts1.mm.bing.net/th?id=OIP.-rp3grSiBWFJABneZl1FmgHaHa&pid="
                  title="Consultoria Tech"
                  description="Te ajudamos a escolher as melhores tecnologias para seu negócio.">
              </custom-card>
          </div>
          <div class="col-md-4">
              <custom-card image="https://ts3.mm.bing.net/th?id=OIP.9HniSkJCJtYlYNDdSMcBZQHaE7&pid="
                  title="Suporte Técnico"
                  description="Suporte profissional para manter seus sistemas funcionando.">
              </custom-card>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define("servicos-component", ServicosComponent);
