const form = document.getElementById('reserva-form');
const mensaje = document.getElementById('mensaje');
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn?.addEventListener('click', () => {
  menu?.classList.toggle('open');
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nombre = data.get('nombre');
  mensaje.textContent = `✅ Gracias ${nombre}, tu solicitud fue enviada.`;
  form.reset();
});
