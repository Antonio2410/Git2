document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector('.custom-toggler');
  const navbar = document.getElementById('navbarNav');

  // Bootstrap Collapse Events
  navbar.addEventListener('show.bs.collapse', function () {
    toggler.classList.add('open');
  });
  navbar.addEventListener('hide.bs.collapse', function () {
    toggler.classList.remove('open');
  });

  document.querySelectorAll('.map-pin').forEach(pin => {
    // Beim Hover (Mouseenter)
    pin.addEventListener('mouseenter', function() {
      document.getElementById('info-title').textContent = this.dataset.title;
      document.getElementById('info-details').textContent = this.dataset.details;
      document.querySelectorAll('.map-pin').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
    });
    // Beim Klick (für Mobile)
    pin.addEventListener('click', function() {
      document.getElementById('info-title').textContent = this.dataset.title;
      document.getElementById('info-details').textContent = this.dataset.details;
      document.querySelectorAll('.map-pin').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.querySelectorAll('.offer-img').forEach(img => {
    const original = img.src;
    const hover = img.getAttribute('data-hover');
    const parent = img.closest('.offer-img-wrapper').parentElement;
    if (hover && parent) {
      parent.addEventListener('mouseenter', () => { img.src = hover; });
      parent.addEventListener('mouseleave', () => { img.src = original; });
    }
  });
});

document.getElementById("clickMe").addEventListener("click", function () {
  alert("Button clicked!");
});