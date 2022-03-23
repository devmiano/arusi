'use strict';

$(document).ready(function () {
  // When the cart button is clicked
  $('.cart').click(function () {
    $('.overlay').toggle();
    $('.cart-modal').slideDown();
  });

  // When overlay is clicked
  $('.overlay').click(function () {
    $('.overlay').toggle('hide');
    $('.cart-modal').toggle('hide');
  });

  // When the close modal button is clicked
  $('.close-btn').click(function () {
    $('.overlay').toggle('hide');
    $('.cart-modal').toggle('hide');
  });

  // When a user clicks on the amount button
  $('.modal-item-btn').click(function () {
    $(this).css('backgroundColor', '#4e854e');
    $(this).text('Added');
    console.log(this);
  });
});
