'use strict';

var app = app || {};

app.circles = (function() {
	var s;

	return {
		settings: {
			theBody: $('body')
		},

		init: function() {
			s = this.settings;
			this.createCircles();
		},

		createCircles: function() {
			s.theBody.on('click', function(e) {
				var $this = $(this);
				var $circle = $('<div/>');
				var posX = e.pageX;
				var posY = e.pageY;

				$this.append($circle.addClass('circle').css({
			        left: posX,
			        top: posY
			    }));    				
	
			});
		}
	};

}());

$(function() {
	app.circles.init();
});