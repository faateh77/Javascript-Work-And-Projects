 const slides = document.querySelectorAll(".slides img");
  let currentSlide = 0;

  function showSlide(index) {
    // Sab images ko hide karo
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Sirf current wali image show karo
    slides[index].style.display = "block";
  }

  function next() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Start mein pehli image show karo
  showSlide(currentSlide);