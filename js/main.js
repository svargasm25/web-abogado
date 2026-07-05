// Calcula automáticamente los años de experiencia a partir del año de inicio.
// Se recalcula con la fecha real del visitante, por lo que se actualiza solo cada 1 de enero.
function actualizarAnosExperiencia() {
  const anoActual = new Date().getFullYear();
  document.querySelectorAll('.years-exp').forEach(el => {
    const anoInicio = parseInt(el.dataset.startYear, 10);
    el.textContent = anoActual - anoInicio;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarAnosExperiencia();
  document.querySelectorAll('main section').forEach(section => section.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
