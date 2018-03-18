function goToByScroll(id){
  $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}
{

  'use strict'

  $('#header-nav').navScroll({
    scrollSpy: true,
  })
}
