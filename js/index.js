// index.js

//var mojs = require('mojs');
//import * as mojs from 'mojs'

console.log("xxsxHsello from JavaScript!");

//var name = "Bob", time = "today";
//console.log(`Hello ${name}, how are you ${time}?`);

console.log('xxxxxxxsssxx');

console.log('Depois');

console.log('primeissro?');
document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");

	var square = document.querySelector('#js-square');
	var bouncyEasing = mojs.easing.path('M0,100 C6.50461245,96.8525391 12.6278439,88.3497543 16.6678547,0 C16.6678547,-1.79459817 31.6478577,115.871587 44.1008572,0 C44.1008572,-0.762447191 54.8688736,57.613472 63.0182497,0 C63.0182497,-0.96434046 70.1500549,29.0348701 76.4643231,0 C76.4643231,0 81.9085007,16.5050125 85.8902733,0 C85.8902733,-0.762447191 89.4362183,8.93311024 92.132216,0 C92.132216,-0.156767385 95.0157166,4.59766248 96.918051,0 C96.918051,-0.156767385 98.7040751,1.93815588 100,0');

	new mojs.Tween({
	  repeat:   999,
	  delay:    1000,
	  duration: 1500,
	  isYoyo: true,

	  onUpdate: function (progress) {
	  	var bounceProgress = bouncyEasing(progress);
			square.style.transform = 'translateY(' + 200*bounceProgress + 'px)';
	  }
	}).play();

	
	var shape_circle = new mojs.Shape({
	  shape:        'cross',  // shape "circle" is default
	  radius:       25,        // shape radius
	  fill:         'transparent',   // same as 'transparent'
	  stroke:       { '#2F0808' : '#EDDBEB' }, // or 'cyan'
	  strokeWidth:  {3 : 10},         // width of the stroke
	  angle: { 0 : 90 },
	  scale: {1.0 : 1.5 },

	  duration: 1500,
	  delay: 500,
	  isYoyo: true,
	  repeat: 999
	}).play();
	
});