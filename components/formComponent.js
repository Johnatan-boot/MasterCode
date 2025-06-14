class CustomForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.classList.add("custom-form-container");

    wrapper.innerHTML = `
           

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
            
            <div class="custom-form card p-4">
                <h3 class="text-center">Entre em Contato</h3>
                <form action="https://formsubmit.co/johnatan.quenes@gmail.com" method="POST">
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome:</label>
                        <input type="text" id="nome" name="nome" class="form-control" required>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail:</label>
                        <input type="email" id="email" name="email" class="form-control" required>
                    </div>

                    <div class="mb-3">
                        <label for="mensagem" class="form-label">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" class="form-control" rows="4" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-success w-100">Enviar</button>
                </form>
            </div>
        `;

    const style = document.createElement("style");
    style.textContent = `
            .custom-form-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            
            .custom-form {
                width: 100%;
                max-width: 400px;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
                border-radius: 10px;
            }

            .custom-form input{
            background-color:#FFFFFF;
            }
            .custom-form textarea{
            background-color:#FFFFFF;
            }
            .custom-form button{
            background-color:#000000;
            border-radius:20px;
            }
        `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define("custom-form", CustomForm);
