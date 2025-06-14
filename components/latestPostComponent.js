class LatestPosts extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .posts-container { display: grid; gap: 20px; grid-template-columns: repeat(2, 1fr); }
        .post-card { background: #f8f8f8; padding: 15px; border-radius: 8px; }
      </style>

      <div class="posts-container">
        <div class="post-card">🚀 Novo Curso de Front-end!</div>
        <div class="post-card">💡 Dicas para Devs Júnior</div>
      </div>
    `;
  }
}

customElements.define("latest-posts", LatestPosts);
