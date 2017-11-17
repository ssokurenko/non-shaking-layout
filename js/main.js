"use strict"

var demoPage = '/demo-content.html',
$body = $('body'),
$content = $('.content'),
delay = 3000;

// setTimeout(function () {
//   // $content.load(demoPage);
// }, delay);

// Adding styling for fixing the jumping content and making the footer sticky

if (location.search === '?fixed') {
  $body.addClass('fixed');
}
