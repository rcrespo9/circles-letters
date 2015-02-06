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
				var $circleForm = $('#circle-form');

				var posX = e.pageX;
				var posY = e.pageY;

				// append circles
				$this.append(
					$circle
					.addClass('circle')
					.text($circleForm.val()[0])
					.css({
				        left: posX,
				        top: posY
			    	})
				);

				// delete characters as circles are appended
				$circleForm.val(function(index,value) {
					return value.substr(1);
				});   				
	
			});
		}
	};

}());

$(function() {
	app.circles.init();
});