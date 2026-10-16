
const photoUpload = document.getElementById('photoUpload');
const profilePhoto = document.getElementById('profilePhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');

// Photo upload
if (photoUpload && profilePhoto) {
  photoUpload.addEventListener('change', function (event) {
    const file = event.target.files && event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please choose an image file.');
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      profilePhoto.src = e.target.result;
      profilePhoto.classList.remove('hidden');

      if (photoPlaceholder) {
        photoPlaceholder.classList.add('hidden');
      }
    };

    reader.readAsDataURL(file);
  });
}

// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

// Footer year
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}
