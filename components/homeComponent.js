class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="home">
        <div class="home__animation">
          <canvas id="matrixCanvas"></canvas>
        </div>
        <div class="home__content">
          <h1>Bem-vindo à Mastercode</h1>
          <p>Soluções inovadoras em software e tecnologia.</p>
          <iframe class="home__video" width="560" height="315" 
          src="https://www.youtube.com/embed/hMbexEPAOQI?si=CYscfw1_0Rtiv5fN" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    `;
    setupMatrixEffect(); // Inicia animação Matrix
  }
}

customElements.define("home-component", HomeComponent);
