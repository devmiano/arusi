'use strict';

$(document).ready(function(){

    // When the Jewel button is clicked
    $('.jewel-btn').click(function(){
        $('.overlay').toggle();
        $('.cart-modal').slideDown();
    })

    // When overlay is clicked
    $('.overlay').click(function(){
        $('.overlay').toggle('hide');
        $('.cart-modal').toggle('hide');
    })

    // When Gowns modal is clicked
    $('.gowns-btn').click(function(){
        $('.overlay2').toggle();
        $('.gowns-modal').slideDown();
    })

    // When overlay2 is clicked
    $('.overlay2').click(function(){
        $('.overlay2').toggle('hide');
        $('.gowns-modal').toggle('hide');
    })
    
    // FOOTWEAR MODAL
    // When Footwear modal is clicked
    $('.footwear-btn').click(function(){
        $('.overlay3').toggle();
        $('.footwear-modal').slideDown();
    })

    // When overlay2 is clicked
    $('.overlay3').click(function(){
        $('.overlay3').toggle('hide');
        $('.footwear-modal').toggle('hide');
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

    // When the footwear close modal button is clicked
    $('.close-footwear').click(function(){
        $('.overlay3').toggle('hide');
        $('.footwear-modal').toggle('hide');
    })

    // When the Total Order Button is clicked

    const orderTotal = function(){
        // let item = document.querySelectorAll('.modal-item-btn');
        // let values = $(item).val();
        // item.forEach(values => {
        //     console.log(values);
        // });
        $('.modal-item-btn').click(function(){
            console.log($(this).val());
        })    
    }

    $('.total-order-btn').click(function(){
      $('.overlay').toggle('hide');
      $('.cart-modal').toggle('hide');
      console.log(orderTotal());
      
    })

    $('.gowns-order-btn').click(function(){
      $('.overlay2').toggle('hide');
      $('.gowns-modal').toggle('hide');

    })

    $('.fw-order-btn').click(function(){
      $('.overlay3').toggle('hide');
      $('.footwear-modal').toggle('hide');
    })

    // When a user clicks on the amount button
    $('.modal-item-btn').click(function(){
        $(this).css('backgroundColor', '#4e854e');
        $(this).text("Added");
        
        let carts = document.querySelectorAll(".modal-item-btn");
        
        for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener("click", () => {
            cartNumbers(carts);
        });
        }
        
        function cartNumbers(){

            let amount = document.querySelectorAll(".modal-item-btn").value;
            let productNumbers = localStorage.getItem("cartNumbers");
            console.log(productNumbers);
            productNumbers = parseInt(productNumbers);
            
            if( productNumbers){
                localStorage.setItem("cartNumbers", productNumbers + 1);
                document.querySelector(".total-order-btn span").textContent =
                    productNumbers + 1;
                document.querySelector(".cart-counter").textContent =
                    productNumbers + 1;
                $('.i').text($('.modal-item-title').text());
                $('.amount').text($(parseInt(amount)));

                $('.cart-empty').hide();
                $('.order-counter').text(productNumbers + 1);
            }
            // else{
            //     localStorage.setItem("cartNumbers", 1) ;
            //     document.querySelector(".total-order-btn span").textContent = 1;
            //     document.querySelector(".cart-counter").textContent = 1;
            // }
        }
        
    });

    // When the Cart Icon is clicked
    $('.shopping-cart-btn').click(function(){
        $('.shop-cart-modal').slideToggle('medium');
    })

    // When the close cart icon is clicked
    $('.close-cart').click(function(){
        $('.shop-cart-modal').slideToggle('medium');
    })   

    // When Complete Order button is clicked
    $('.complete-order').click(function(){
        $('.complete-order').toggle('hide');
        $('.cart-order-total').toggle('hide');
        $('.cart-order-items').hide();
        $('.cart-counter').text("0");
        $('.alert').toggle('show');
    })
})

