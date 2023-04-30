const swiper = new Swiper('.swiper', {
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });