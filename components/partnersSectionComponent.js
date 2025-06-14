class PartnersSection extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .partners-container { display: flex; gap: 20px; justify-content: center; padding: 20px; }
        .partner-logo { width: 100px; }
      </style>

      <div class="partners-container">
        <img class="partner-logo" src="/assets/partner1.svg" alt="Parceiro 1">
        <img class="partner-logo" src="/assets/partner2.svg" alt="Parceiro 2">
      </div>
    `;
  }
}

customElements.define("partners-section", PartnersSection);
