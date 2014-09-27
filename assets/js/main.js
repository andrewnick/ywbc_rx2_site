function slabTextHeadlines(){
	$('h1').slabText();

}

$(window).load(function() {
// So, to recap... don't actually do this, it's nasty!
  setTimeout(slabTextHeadlines, 1000);

});

// $(document).ready( function(){

// // WebFont.load({
// //     google: {
// //       families: ['Rokkitt:400,700', 'Oswald:300,400,700', 'Roboto:400,500,700']
// //     },
// //     loading: function () {
// //     	//$('.block_text').slabText();
// //     }
// //  });

// slabTextHeader();

// });
