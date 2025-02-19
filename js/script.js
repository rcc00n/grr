document.addEventListener('DOMContentLoaded', () => {
  // Обработчик для изменения хедера при скролле
  const header = document.querySelector('.header-line');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });

  // Плавная прокрутка
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetID = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetID);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 70,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Анимации появления элементов
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.2 });

  document.querySelectorAll('.hero-animate, .section-title, .card').forEach(el => observer.observe(el));
});

