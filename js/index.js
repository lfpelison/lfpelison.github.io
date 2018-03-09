// index.js

//var mojs = require('mojs');
//import * as mojs from 'mojs'

//var name = "Bob", time = "today";
//console.log(`Hello ${name}, how are you ${time}?`);



function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('pointer-events', 'none');
	clear();
	colorMode(HSB);

	
}

function draw() {
	var svg = select('#x');
	var logo = select('#logo');
	var me = select('#me');
	var name = select('#name');
	var career = select('#career');
	var above_footer = select('#above_footer');

	if (mouseIsPressed) {
		strokeWeight(8);
		stroke(map(mouseX, 0, windowWidth, 0, 360), 41.2, map(mouseY, 0, windowHeight, 45, 90)); //64.2
		line(mouseX, mouseY, pmouseX, pmouseY);
		
	}

	if (frameCount == 250) {
		svg.style('width','56px');
		svg.style('height','22px');
		svg.style('margin-right', '1.2em');
		svg.parent('right__bottom');
		logo.parent('left');

		var cloneSvg = document.getElementById("x").cloneNode(true);
		document.getElementById("right__bottom").appendChild(cloneSvg);

		var cloneSvg = document.getElementById("x").cloneNode(true);
		document.getElementById("right__bottom").appendChild(cloneSvg);

		var home = createA('http://p5js.org/', 'Home').parent('right__top').addClass('text');
		var about = createA('http://p5js.org/', 'About').parent('right__top').addClass('text');
		var work = createA('http://p5js.org/', 'Work').parent('right__top').addClass('text');

		me.style('display', 'inline-block');
		name.style('display', 'none');
		career.style('display', 'none');
		logo.style('padding', '0 2.5em 0 1em');

		contact = createElement('h3', 'Contact me').parent('contact_here');

		above_footer.style('display', 'inline');

		//document.getElementById("footer").appendChild(document.getElementById("center__bottom"));

	}

}



/*

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

*/