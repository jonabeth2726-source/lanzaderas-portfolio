const photoUpload = document.getElementById('photoUpload');
const profilePhoto = document.getElementById('profilePhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');

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
    photoPlaceholder.classList.add('hidden');
  };
  reader.readAsDataURL(file);
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
