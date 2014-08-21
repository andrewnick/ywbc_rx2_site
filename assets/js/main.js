var tablet = 750;
var desktop = 970;
var large = 1170;

var hero_image_large_ratio = 0.37;

var secInMin = 60;
var secInHour = secInMin * 60;
var secInDay = secInHour*24;
var secInWeek = secInDay*7;
var secInMonth = secInWeek*4;
var secInYear = secInWeek*52;



$(document).ready( function(){

	$('.block_text').slabText();

	getTwitterFeed();

	// Set the hight of the background image depending on the width of the section
	//$('.hero_background').css('height', setImageHeight( hero_image_large_ratio , $('.hero_background')));
	// $('.intro_background').css('height', setImageHeight( hero_image_large_ratio , $('.intro_background')));

});


function getTwitterFeed (){

		var tweetTime;
		var currentTime;
		var timeDifference;
		$.getJSON('twitter.json', function(feed){
				console.log(feed);

				var tweetedTime = getTimeSinceTweet(feed.created_at);
				console.log(tweetedTime);
		});


}


// Function returns the time since the last tweet
function getTimeSinceTweet (tweetTime) {
				
				var tweetTimeOutput;

				var pastTime = new Date(tweetTime);
				var currentTime = new Date();
				var timeDifference = currentTime - pastTime;

				console.log(timeDifference);	
				console.log(tweetTime);

				var years = parseInt(timeDifference/(secInYear*1000));
				timeDifference = timeDifference%secInYear;

				var months = parseInt(timeDifference/secInMonth);
				timeDifference = timeDifference%secInMonth;

				var weeks = parseInt(timeDifference/secInWeek);
				timeDifference = timeDifference%secInWeek;

				var days = parseInt(timeDifference/secInDay);
				timeDifference = timeDifference%secInDay;

				var hours = parseInt(timeDifference/secInHour);
				timeDifference = timeDifference%secInHour;

				var mins = parseInt(timeDifference/secInMin);
				timeDifference = timeDifference%secInMin;

				var secs = timeDifference;

				console.log(years + "years, " +
							months + "months" +
							weeks + "weeks, " +
							days + "days, " +
							hours + "hours, " +
							mins + "mins, " +
							secs+ "sec");

				if (years > 0 ) {

					tweetTimeOutput	= years + "years";

				} else if( weeks > 0){

					tweetTimeOutput	= weeks + "weeks";

				} else if( days > 0){
					
					tweetTimeOutput	= days + "days";

				} else if( hours > 0){
					
					tweetTimeOutput	= hours + "hours";

				} else if( mins > 0){
					
					tweetTimeOutput	= mins + "mins";

				} else if( secs > 0){
					
					tweetTimeOutput	= secs + "sec";

				}

				return tweetTimeOutput;

}




// This sets the height of the element as a percentage of the element's width
function setImageHeight (heightPercentage, element) {

		var containerWidth = element.css('width');
		var containerHeight = parseInt(containerWidth) * heightPercentage;

		return containerHeight;
}