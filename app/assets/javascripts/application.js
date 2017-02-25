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






/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00;
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;

  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });

  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;

  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
