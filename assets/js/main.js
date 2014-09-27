var tablet = 768;
var desktop = 992;
var large = 1200;

var hero_image_large_ratio = 0.37;

var secInMin = 60;
var secInHour = secInMin * 60;
var secInDay = secInHour*24;
var secInWeek = secInDay*7;
var secInMonth = secInWeek*4;
var secInYear = secInWeek*52;

$(document).ready( function(){
	
	WebFont.load({
	    google: {
	      families: ['Rokkitt:400,700', 'Oswald:300,400,700', 'Roboto:400,500,700']
	    },
	 });

	$('.block_text').slabText();

	getTwitterFeed();

});


function getTwitterFeed (){

		var tweetTime;
		var currentTime;
		var timeDifference;

		$.getJSON('twitter.json', function(feedTweet){

				// console.log(feedTweet);

				// var tweetedTime = getTimeSinceTweet(feedTweet.created_at);
				// var allTweets_head = '<section class="contact_tweets_container">';
				// var allTweets_foot = '</section>';

				// $.each(feed, function (i, feedTweet) {

				var tweet = '<article class="contact_tweet"><div class="row">' + 
							'<h4 class="contact_twitterFeed_name col-xs-3">' + feedTweet.user.name + '</h4>' +
									'<h6 class="contact_twitterFeed_username col-xs-8">@'+feedTweet.user.screen_name+'</h6>' +
								'</div>' +
								'<div class="row">' +
									'<p class="contact_twitterFeed_text col-sm-12">'+feedTweet.text+'</p>' +
								'</div>' +
								'<div class="row">' +
									'<p class="contact_twitterFeed_text col-sm-12">' + feedTweet.created_at + '</p>' +
								'</div>' +
							'</article>';

				$('.contact_tweets_container').append(tweet);
				$('.contact_tweets_container').append(tweet);
				$('.contact_tweets_container').append(tweet);

				// });				

				// console.log(tweet);

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