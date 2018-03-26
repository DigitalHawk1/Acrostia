'use strict'

function goToByScroll (id) {
  $('html,body').animate({scrollTop: $('#' + id).offset().top}, 'slow')
}

$('#header-nav').activescroll({
  scroll: "scroll",
  active: "active",
  offset: 20,
  animate: 1000
});