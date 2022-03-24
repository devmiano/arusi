'use strict';

$(document).ready(function () {
    let totalItems = 0
    let cost = 0

    // When the Jewel button is clicked
    $('.jewel-btn').click(function () {
        $('.overlay').toggle();
        $('.cart-modal').slideDown();
    })

    // When overlay is clicked
    $('.overlay').click(function () {
        $('.overlay').toggle('hide');
        $('.cart-modal').toggle('hide');
    })

    // When Gowns modal is clicked
    $('.gowns-btn').click(function () {
        $('.overlay2').toggle();
        $('.gowns-modal').slideDown();
    })

    // When overlay2 is clicked
    $('.overlay2').click(function () {
        $('.overlay2').toggle('hide');
        $('.gowns-modal').toggle('hide');
    })
    
    // FOOTWEAR MODAL
    // When Footwear modal is clicked
    $('.footwear-btn').click(function () {
        $('.overlay3').toggle();
        $('.footwear-modal').slideDown();
    })

    // When overlay2 is clicked
    $('.overlay3').click(function () {
        $('.overlay3').toggle('hide');
        $('.footwear-modal').toggle('hide');
    })


    // When the close modal button is clicked
    $('.close-btn').click(function () {
        $('.overlay').toggle('hide');
        $('.cart-modal').toggle('hide');
    })

    // When the gown close modal button is clicked
    $('.close-gowns').click(function () {
        $('.overlay2').toggle('hide');
        $('.gowns-modal').toggle('hide');
    })

    // When the footwear close modal button is clicked
    $('.close-footwear').click(function () {
        $('.overlay3').toggle('hide');
        $('.footwear-modal').toggle('hide');
    })

    // When the Total Order Button is clicked
    $('.total-order-btn').click(function () {
        $('.overlay').toggle('hide');
        $('.cart-modal').toggle('hide');
        
    })

    $('.gowns-order-btn').click(function () {
        $('.overlay2').toggle('hide');
        $('.gowns-modal').toggle('hide');
    })

    $('.fw-order-btn').click(function () {
        $('.overlay3').toggle('hide');
        $('.footwear-modal').toggle('hide');
    })

    // When a user clicks on the amount button
    $('.modal-item-btn').click(function () {
        $(this).css('backgroundColor', '#4e854e');
        $(this).text("Added");
        cost += parseInt($(this).attr('value'))
        $('.fw-order-btn').html("Items selected: " + ++totalItems + '<br/>' + "total cost: " + cost);
        
    })
    });
   // let carts = document.querySelectorAll(".modal-item-btn");
 
//for (let i = 0; i < carts.length; i++) {
 //carts[i].addEventListener("click", () => {
  //  cartNumbers();
 //});
//}
  
 //adding items to the cart
//function cartNumbers() {
    //let productNumbers = localStorage.getItem("cartNumbers");
    //console.log(productNumbers);
    //productNumbers = parseInt(productNumbers);
 
   // if (productNumbers) {
     //   localStorage.setItem("cartNumbers", productNumbers + 1);
       // document.querySelector(".total-order-btn span").textContent =
         //   productNumbers + 1;
    //} else {
      //  localStorage.setItem("cartNumbers", 1);
        //document.querySelector(".total-order-btn span").textContent = 1;
  //  }

//};
