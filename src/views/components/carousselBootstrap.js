class CarouselComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    this.currentIndex = 0;
    this.carousel = null;

   shadow.innerHTML = `
  <style>
    .carousel-container {
      height:350px;
      position: relative;
      left:10px;
      bottom:650px;
      width: 100%;
      max-width: 600px;
      overflow: hidden;
    }
    .carousel {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }
    .carousel img {
      width: 100%;
      flex-shrink: 0;
    }
    .controls {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: white;
      padding: 10px;
      cursor: pointer;
      border: none;
    }
    .prev { left: 10px; }
    .next { right: 10px; }
  </style>

  <div class="carousel-container">
    <div class="carousel">
      <img src="public/assets/imagem1.jpg" alt="Slide 1">
      <img src="public/assets/imagem2.jpg" alt="Slide 2">
      <img src="public/assets/imagem3.jpg" alt="Slide 3">
    </div>
    <button class="controls prev">&lt;</button>
    <button class="controls next">&gt;</button>
  </div>
`;
this.carousel = shadow.querySelector('.carousel');
    shadow.querySelector('.prev').addEventListener('click', () => this.moveSlide(-1));
    shadow.querySelector('.next').addEventListener('click', () => this.moveSlide(1));
  }

  moveSlide(direction) {
    const slides = this.carousel.children.length;
    this.currentIndex = (this.currentIndex + direction + slides) % slides;
    this.carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}

customElements.define('carousel-component', CarouselComponent);
