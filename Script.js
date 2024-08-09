const contactSection = document.getElementById('contacto');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const contactSectionTop = contactSection.offsetTop;
  const contactSectionBottom = contactSectionTop + contactSection.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > contactSectionTop && scrollPosition < contactSectionBottom) {
    footer.style.display = 'none'; 
  } else {
    footer.style.display = 'flex'; 
  }
});
