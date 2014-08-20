var tablet = 750;
var desktop = 970;
var large = 1170;

var hero_image_large_ratio = 0.37;


$(document).ready( function(){


	// Set the hight of the background image depending on the width of the section
	//$('.hero_background').css('height', setImageHeight( hero_image_large_ratio , $('.hero_background')));
	// $('.intro_background').css('height', setImageHeight( hero_image_large_ratio , $('.intro_background')));

});



// This sets the height of the element as a percentage of the element's width
// This also sets the hei
function setImageHeight (heightPercentage, element) {

		var containerWidth = element.css('width');
		var containerHeight = parseInt(containerWidth) * heightPercentage;

		return containerHeight;
}