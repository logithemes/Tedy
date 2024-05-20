$(document).ready(function () {
  
  //mobile menu click
  $(".sidebar_mb_menu span, .close_btn").on("click", function(){
    $(".main-menu .navbar").toggleClass("act");
});

//window on scrool 

$(window).on("scroll", function(){
  var _top = $(window).scrollTop();

  if (_top > 100) {
    $(".main-menu").addClass("act");
  } else {
    $(".main-menu").removeClass("act");
  }
});

//Inspired from the work of //
//Illustration by http://psdblast.com/flat-color-abstract-city-background-psd
$(window).on('mousemove', function(e) {
  var w = $(window).width();
  var h = $(window).height();
  var offsetX = 0.5 - e.pageX / w;
  var offsetY = 0.5 - e.pageY / h;

  $(".parallax").each(function(i, el) {
      var offset = parseInt($(el).data('offset'));
      var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

      $(el).css({
          '-webkit-transform': translate,
          'transform': translate,
          'moz-transform': translate
      });
  });
});

  
  
  // This version is dyanmic and cloned items are inserted automatically. Also --tiles variable set by JS automatically.

// For Pure CSS version visit https://codepen.io/chiraggoyal777/pen/ZEVqwje

// Get all image carousels
const allImageCarousels = document.querySelectorAll("[data-rc-carousel]");

// For duplicating items and setting --tiles variable
allImageCarousels.forEach((carousel) => {
  const allItems = carousel.querySelectorAll("[data-rc-carousel-item]");
  allItems.forEach((item) => {
    // Prepare cloning each item
    const itemToClone = item.cloneNode(true);
    itemToClone.setAttribute("aria-hidden", "true");
    itemToClone.classList.add("cloned");
    // Insert cloned item here
    carousel
      .querySelector("[data-rc-carousel-box]")
      .insertAdjacentElement("beforeend", itemToClone);
  });
  // set --tiles variable to carousel
  carousel.style.setProperty("--tiles", allItems.length * 2);
});





});




