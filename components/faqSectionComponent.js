class FaqSection extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .faq-container { padding: 20px; background: #f8f8f8; border-radius: 8px; }
        .faq-item { margin-bottom: 10px; }
        .faq-title { font-weight: bold; cursor: pointer; }
        .faq-content { display: none; padding: 5px; }
      </style>

      <div class="faq-container">
        <div class="faq-item">
          <div class="faq-title">🚀 O que é a MasterCode?</div>
          <div class="faq-content">A MasterCode é uma plataforma de cursos e desenvolvimento de software.</div>
        </div>
        <div class="faq-item">
          <div class="faq-title">💡 Como faço para me inscrever?</div>
          <div class="faq-content">Clique no botão "Inscreva-se Agora" e siga as instruções.</div>
        </div>
      </div>
    `;

    shadow.querySelectorAll(".faq-title").forEach((title) => {
      title.addEventListener("click", () => {
        const content = title.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  }
}

customElements.define("faq-section", FaqSection);
