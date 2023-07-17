const myCarousel = document.querySelector('#carouselExampleCaptions');

// Membuat variabel untuk menangkap tombol prev dan next
const carouselPrev = document.querySelector('.carousel-control-prev');
const carouselNext = document.querySelector('.carousel-control-next');

// Menambahkan event listener untuk saat tombol prev diklik
carouselPrev.addEventListener('click', () => {
  myCarousel.carousel('prev');
});

// Menambahkan event listener untuk saat tombol next diklik
carouselNext.addEventListener('click', () => {
  myCarousel.carousel('next');
});

// Mengatur waktu tampilan gambar pada slider
$('.carousel').carousel({
  interval: 3000 // 3 detik
});

window.onload = function() {
  console.log("Halaman telah dimuat sepenuhnya.");
};

function showNotification() {
  alert("Pesan berhasil terkirim!");
}

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
})

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img .blog-container, .contact .left-side', {origin: 'buttom'});
ScrollReveal().reveal('.home-content h1,.about-img', {origin:'left'});