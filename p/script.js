// Top Properties

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn[data-filter]");
  const cards = document.querySelectorAll(".col-md-4[data-type]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      buttons.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline-secondary");
      });
      button.classList.remove("btn-outline-secondary");
      button.classList.add("btn-primary");

      cards.forEach(card => {
        const type = card.getAttribute("data-type");
        card.style.display = (filter === "all" || filter === type) ? "block" : "none";
      });
    });
  });
});


// Explore Cities

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive:{
      0:{ items:1 },
      600:{ items:3 },
      1000:{ items:4 }
    }
  });

// testimonial-carousel

  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 5 }
    }
});

  const words = document.querySelectorAll('.cd-words-wrapper .item-text');
  let currentIndex = 0;

  setInterval(() => {
    words[currentIndex].classList.remove('is-visible');
    words[currentIndex].classList.add('is-hidden');

    currentIndex = (currentIndex + 1) % words.length;

    words[currentIndex].classList.remove('is-hidden');
    words[currentIndex].classList.add('is-visible');
  }, 2500);