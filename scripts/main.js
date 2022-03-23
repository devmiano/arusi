'use strict';

$(document).ready(function(){
    // When the cart button is clicked
    $('#jewellery').click(function(){
        $('.overlay').toggle();
        $('.cart-modal').slideDown();
    })

    // When overlay is clicked
    $('.overlay').click(function(){
        $('.overlay').toggle('hide');
        $('.cart-modal').toggle('hide');
    })

    // When Gowns modal is clicked
    $('#gowns').click(function(){
        $('.overlay2').toggle();
        $('.gowns-modal').slideDown();
    })

    // When overlay2 is clicked
    $('.overlay2').click(function(){
        $('.overlay2').toggle('hide');
        $('.gowns-modal').toggle('hide');
    })


    // When the close modal button is clicked
    $('.close-btn').click(function(){
        $('.overlay').toggle('hide');
        $('.cart-modal').toggle('hide');
    })

     // When the gown close modal button is clicked
     $('.close-gowns').click(function(){
        $('.overlay2').toggle('hide');
        $('.gowns-modal').toggle('hide');
    })

    // When a user clicks on the amount button
    $('.modal-item-btn').click(function(){
        $(this).css('backgroundColor', '#4e854e');
        $(this).text("Added");
        console.log(this);
    })

    
})