class HomeComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="home">
        <canvas id="matrixCanvas"></canvas>
        <div class="home__content">
          <h1>Bem-vindo à Mastercode</h1>
          <p>Soluções inovadoras em software e tecnologia.</p>
          <iframe class="home__video" 
                  src="https://www.youtube.com/embed/hMbexEPAOQI?si=CYscfw1_0Rtiv5fN" 
                  title="Vídeo MasterCode" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  loading="lazy">
          </iframe>
        </div>
      </section>
    `;
    setupMatrixEffect();
  }
}
customElements.define("home-component", HomeComponent);
