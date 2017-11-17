"use strict"

var demoPage = './demo-content.html',
$body = $('body'),
$content = $('.content'),
delay = 3000;

setTimeout(function () {
  $content.load(demoPage);
}, delay);

// Adding a class with styles to fix the jumping content and setting up the footer sticky

if (location.search === '?fixed') {
  $body.addClass('fixed');
}
