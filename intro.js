let intro = document.querySelector('.Intro');
let logo = document.querySelector('.LogoIntro');
let logoSpan = document.querySelectorAll('.IntroPartes');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
       logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.add('active');
            }, (index + 1) * 100);
       });

       setTimeout(() => {
          logoSpan.forEach((span, index) => {
            setTimeout(() => {
               span.classList.remove('active');
               span.classList.add('fade'); 
            }, (span + 1) * 80);
          });
       }, 3300);

       setTimeout(() => {
          intro.style.top  = '-100vh';
       }, 1); //2800

    });

});