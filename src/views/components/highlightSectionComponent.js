class HighlightSection extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        .highlight-container {
        
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: 20px;
         background: linear-gradient(135deg, #0a1d0a, #00FF7F);
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
        .highlight-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }
        .highlight-card:hover {
          transform: scale(1.1);
        }
        .highlight-card img {
          width: 40px;
          height: 40px;
        }
      </style>

      <div class="highlight-container">
        <div class="highlight-card">
          <img src="/assets/iconeCodigo.svg" alt="Código">
          <span>🚀 Cursos Avançados</span>
        </div>
        <div class="highlight-card">
          <img src="/assets/iconeIdeiaInovacao.svg" alt="Inovação">
          <span>✨ Novidades e Atualizações</span>
        </div>
        <div class="highlight-card">
          <img src="/assets/iconeSuporteTec.svg" alt="Suporte">
          <span>📞 Suporte 24h</span>
        </div>
      </div>
    `;
  }
}
customElements.define('highlight-section', HighlightSection);


document.getElementById("trigger-comments").addEventListener("click", function() {
  document.getElementById("comments-container").classList.add("active");
});
