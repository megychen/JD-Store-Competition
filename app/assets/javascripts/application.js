// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require masonry/jquery.masonry
//= require bootstrap-sprockets
//= require jquery.raty
//= require ratyrate
//= require social-share-button
//= require social-share-button/wechat
//= require_tree .

$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 5000
	})

    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});


});



/* welcome-page pins*/

$(function(){
    // var $box = $('.box');
    // $box.hide();
    var $pins = $('#pins');
    $pins.imagesLoaded(function(){
      // $box.fadeIn();
      $pins.masonry({
        itemSelector : '.box',
        isFitWidth: true,
      });
    });
  });


$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

/*End of welcome-page pins*/


/* carousel effect  */

// $('.carousel').carousel()

/* scroll effect  */
(function ($) {
  $(document).ready(function(){
    $('.index').hide();
    $(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() > 1000) {
                $('.index').fadeIn();
            } else {
                $('.index').fadeOut();
            }
        });
    });

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.animated').fadeOut();
            } else {
                $('.animated').fadeIn();
            }
        });
    });

});
  }(jQuery));


/* star rating  */
$('#star-rating img').eq(0).trigger('click')

/* index effect */

$(document).on('click', '.index', function () {
  $('body').animate({'scrollTop': 0}, 700)
})


/* text animation */
$(document).ready(function() {
  $('.service-slogan p').fadeIn("slow");
});
