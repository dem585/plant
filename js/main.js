let swsiper  = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        navigation: {
          nextEl: ".swiper-button-p",
          prevEl: ".swiper-button-n",
        },
});


$('.header__search-img').on('click', function(){
    $('.header__search-input').addClass('_active');
});


jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $("#popup"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.header__search-input').removeClass('_active');
      document.getElementById('popup').value = "";
    }
  });
});