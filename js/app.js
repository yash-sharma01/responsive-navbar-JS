const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  //Animate Links
  navLinks.forEach((link, index) => {
    link.style.animations = `navLinkFAde 0.5s ease forwards ${
      index / 7 + 0.3
    }s`;
  });
};

navSlide();
