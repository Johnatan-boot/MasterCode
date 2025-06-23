class CustomCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const wrapper = document.createElement("div");
        wrapper.classList.add("custom-card");

        const img = document.createElement("img");
        img.src = this.getAttribute("image") || "";
        img.alt = "Imagem do Card";
        img.classList.add("card-img");

        const title = document.createElement("h3");
        title.textContent = this.getAttribute("title") || "Título do Card";

        const description = document.createElement("p");
        description.textContent = this.getAttribute("description") || "Descrição do card.";

        const button = document.createElement("button");
        button.textContent = "Saiba Mais";
        button.classList.add("card-btn");

        wrapper.appendChild(img);
        wrapper.appendChild(title);
        wrapper.appendChild(description);
        wrapper.appendChild(button);

        const style = document.createElement("style");
        style.textContent = `
        .custom-card {
            margin:7px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
       }

            .custom-card {
                width: 100%;
                max-width: 280px;
                padding: 20px;
                border-radius: 10px;
                background: linear-gradient(135deg, #0a1d0a, #00FF7F);
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
                color: white;
                text-align: center;
                transition: transform 0.3s ease-in-out;
            }

            .custom-card:hover {
                transform: scale(1.05);
            }

            .card-img {
                width: 100%;
                height: 30vh;
                border-radius: 5px;
            }

            .card-btn {
                background-color: #00FF7F;
                color: black;
                border: none;
                padding: 10px 20px;
                margin-top: 10px;
                cursor: pointer;
                border-radius: 5px;
                transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
            }

            .card-btn:hover {
                background-color: #14dd78;
                color: white;
                transform: scale(1.1);
            }
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(wrapper);
    }
}

customElements.define("custom-card", CustomCard);
