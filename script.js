//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
}

// klik diluar sidebar untuk menghilangkan navnya
const hamburger = document.querySelector('#hamburger-menu');

//ketika di klik akan menjalankan fungsai dan ambil evennya, jika kita ngetiknya diluar menud dan diluar navbar. e target untuk yg diklik sam mause kita pada saat itu
document.addEventListener('click', function(e) {    
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        //menghilangkan activenya dengan remove
        navbarNav.classList.remove('active');
    }
    
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});


// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
  };

  
// klik di luar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = 'none';
    }
  };

// Initialize Swiper with responsive breakpoints
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,  // Default to 1 slide per view for mobile
    spaceBetween: 20,
    loop: true,  // Loop to prevent the slider from running out of slides
    autoplay: {
      delay: 3000,  // Auto slide every 3 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,  // Allows pagination to be clickable
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,  // 2 slides per view for medium screens
      },
      1024: {
        slidesPerView: 3,  // 3 slides per view for large screens
      },
    },
  });
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Default for smaller screens
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2, // 2 slides on medium-sized screens
    },
    1024: {
      slidesPerView: 3, // 3 slides on larger screens
    },
  },
});



  AOS.init({
    once: true,  // Hanya animasi sekali ketika elemen pertama kali terlihat
    easing: 'ease-in-out',  // Efek easing yang lebih lembut
    duration: 1000,  // Durasi animasi
    offset: 200,  // Jarak sebelum animasi dimulai
  });


  