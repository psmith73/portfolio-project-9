/*========== TOUCH ==========*/

document.addEventListener("touchstart", function(){}, true);

/*========== WAYPOINTS ==========*/

$(function(){ // a self calling function
    function onScrollInit( items, trigger ) { // a custom made function
        items.each( function() { //for every element in items run function
        var osElement = $(this), //set osElement to the current 
            osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
            osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

            osElement.css({ //change css of element
                '-webkit-animation-delay':  osAnimationDelay, //for safari browsers
                '-moz-animation-delay':     osAnimationDelay, //for mozilla browsers
                'animation-delay':          osAnimationDelay //normal
            });

            var osTrigger = ( trigger ) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

            osTrigger.waypoint(function() { //scroll upwards and downwards
                osElement.addClass('animated').addClass(osAnimationClass).removeClass('hidden'); //add animated and the data-animation class to the element.
                },{
                    triggerOnce: true, //only once this animation should happen
                    offset: '74%' // animation should happen when the element is 70% below from the top of the browser window
            });
        });
    }

    onScrollInit( $('.os-animation') ); //function call with only items
    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') ); //function call with items and trigger
});

/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() { //when document(DOM) loads completely. 
    // Transition effect for navbar 
    $(window).scroll(function() { //function is called while you scrolls 
      // checks if window is scrolled more than 300px, adds/removes solid class
      if($(this).scrollTop() > 300) { 
          $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
      } else {
          $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
      }
    });
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
$(document).click(function (event) { //click anywhere
    var clickover = $(event.target); //get the target element where you clicked
    var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
    if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
        $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
    }
});
});

/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function(){ //document is loaded
// Add smooth scrolling to all links
$("a").on('click', function(event) {//click on any link;anchor tag;

// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") { //for e.g. website.com#home - #home
  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;
  //console.log('hash:',hash)

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({ //animate whole html and body elements
    scrollTop: $(hash).offset().top //scroll to the element with that hash
  }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash; //website.com - website.com#home
    //Optional remove "window.location.hash = hash;" to prevent transparent navbar on load
  });
} // End if
});
});

/*========== BOUNCING DOWN ARROW ==========*/
//down arrow at top
$(document).ready(function(){
$(window).scroll(function(){ //browser scroll 
$(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //set opacity css from 1 to -(negative) infinity of element with class 'arrow'
//250 is fade pixels
});
});

/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { //when document is ready
$(window).scroll(function() { //when webpage is scrolled
if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
  $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
} else { //if not
  $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
}
});
});

/*========== CONTACT FORM ==========*/

(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input2').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        });    
    });
            
  
    
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input2').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);