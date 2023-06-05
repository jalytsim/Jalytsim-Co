window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const navList = document.querySelector('header nav ul');
  const hero = document.querySelector('.hero');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('scrolled');
    hero.style.opacity = 0;
    navList.classList.add('visible');
  } else {
    header.classList.remove('scrolled');
    hero.style.opacity = 1;
    navList.classList.remove('visible');
  }
});


// Script pour ajouter un effet de transition au défilement de la page
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");

  function addActiveClass() {
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", addActiveClass);
});
