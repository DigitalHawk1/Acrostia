/*
    Author: Akshay Nagpal (github.com/akshaynagpal)
    License: MIT
*/

$(document).ready(function () {
  // clicking button with class "category-button"
  $('.button').click(function () {
    // get the data-filter value of the button
    var filterValue = $(this).attr('data-filter')
    var all = $('.all')

    // show all items
    if (filterValue === 'all') {
      all.show('slow')
    }
    else {
      // hide all items
      all.not('.' + filterValue).hide('fast')
      // and then, show only items with selected data-filter value
      all.filter('.' + filterValue).show('slow')
    }
  })
})

$('.filters-button-group').each(function (i, filtersButtonGroup) {
  var $filtersButtonGroup = $(filtersButtonGroup)
  $filtersButtonGroup.on('click', 'button', function () {
    $filtersButtonGroup.find('.is-checked').removeClass('is-checked')
    $(this).addClass('is-checked')
  })
})