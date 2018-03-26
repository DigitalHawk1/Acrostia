'use strict'

function myFunction () {
  var x = document.getElementById('header-nav')
  if (x.className === 'top-nav') {
    x.className += ' responsive'
  } else {
    x.className = 'top-nav'
  }
}
