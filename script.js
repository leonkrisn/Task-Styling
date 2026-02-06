new Swiper('.card-wrapper', {
  // Optional parameters
//   direction: 'horizontal',
  loop: true,

  // If we need pagination
    //   USING THIS
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});