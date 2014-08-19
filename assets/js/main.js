var tablet = 750;
var desktop = 970;
var large = 1170;




$(document).ready( function(){



});



// This sets the height of the element as a percentage of the element's width
function setImageHeight (heightPercentage, element) {

		var containerWidth = element.css('width');
		var containerHeight = parseInt(containerWidth) * heightPercentage;
		element.css('height', containerHeight);
}