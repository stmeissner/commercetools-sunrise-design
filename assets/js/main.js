/*****************************************************************************/
/*
/* NAVIGATION
/*
/*****************************************************************************/

$(document).ready(function(){
  // Toggle search bar on mobile
  $('.search-toggle').click(function(){
      $('.search-box').slideToggle();
  });

  // Location dropdown
  $(".location-dropdown-toggle").click(function () {
    $(".location-dropdown").slideToggle();
  });
});

// Toggling plus and minus icons for mobile navigation menu
$(".dropdown-toggle").click(function() {
  $(this).find(".mobile-plus-content").toggleClass("mobile-minus-content");
});

// Apply active class to last item of breadcrumb
$('.breadcrumb li').last().addClass('active');

// Stop propagation and enable direct linking of categories
$('.dropdown-toggle').click(function(event) {
  if($(window).width() > 768) {
    event.stopPropagation();
  }
});

  // Close dropdown when clicking outside of it
// $(document).mouseup(function (e) {
//   var container = $(".location-dropdown");
//   if (!container.is(e.target) // if the target of the click isn't the container
//     && container.has(e.target).length === 0) // nor a descendant of the container
//   {
//     container.hide();
//   }
// });

/*****************************************************************************/
/*
/* HOME PAGE
/*
/*****************************************************************************/

// $(document).ready(function() {
//   $(".slick-homepage").slick({
//     dots: true
//   });
// });

/*****************************************************************************/
/*
/* POP PAGE
/*
/*****************************************************************************/

// Activate megamenu accordion on smaller screens
$(function() {
  if ($(window).width() < 768) {
    $(".nav-accordion").accordion({
      heightStyle: "content",
      active: false,
      collapsible: true
    });
  }
});

// Disabling bootstrap menu close on 2nd+ level items
$( ".dropdown-submenu" ).click(function(event) {
    // stop bootstrap.js to hide the parents
    event.stopPropagation();
    // hide the open children
    $( this ).find(".dropdown-submenu").removeClass('open');
    // add 'open' class to all parents with class 'dropdown-submenu'
    $( this ).parents(".dropdown-submenu").addClass('open');
    // this is also open (or was)
    $( this ).toggleClass('open');
});

// Close hamburger menu on select click or outside
$(function() {
  $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function() {
    $('.navbar-toggle:visible').click();
  });
});

// Off-canvas menu
$(document).ready(function() {
  $('[data-toggle="offcanvas"]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

// Price range slider
$(function() {
  $(".slider-range").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [0, 1000],
    slide: function(event, ui) {
      // Getting handler values
      $('.s1').val('€ ' + ui.values[0]);
      $('.s2').val('€ ' + ui.values[1]);
    }
  });
});

// Adding dynamic ID to quickview modals
$( ".quickview" ).click(function( event ) {
  event.preventDefault();
  var modalId = event.target.getAttribute('data-modal')
  $("#" + modalId).modal('show');
});

// Wishlist section
$( ".wishlist-btn" ).click(function() {
  $( ".wishlist-items" ).toggleClass("hidden");
});

// Dark background on opened menu (mobile)
$(".navbar-toggle").click(function() {
  $(".darkbg").toggleClass("hidden");
});

/*****************************************************************************/
/*
/* PDP PAGE
/*
/*****************************************************************************/

// Product gallery - BZoom
$("ul#bzoom").each( function(index, ul) {
  var imgCount = $('#bzoom').data('count');
  $ul = $(ul);
  $ul.zoom({
    zoom_area_width: 300,
    // MORE OPTIONS HERE
    small_thumbs: imgCount,
    autoplay: false
  });
});

// Toggle hidden/sliced description
$(function() {
    var hiddenDescription = $('p.pdp-product-description'),
        generatedHidden,
        shownFlag,
        hiddenDescriptionText;

    if (hiddenDescription.length) {
        hiddenDescription = hiddenDescription.first();
        hiddenDescriptionText = hiddenDescription.text();

        if (hiddenDescriptionText.length < 100) return;
        hiddenDescription.html(
            hiddenDescriptionText.slice(0,100)+'<span>... </span>'+
            '<span class="hidden">'+ hiddenDescriptionText.slice(100, hiddenDescriptionText.length)+'</span>'
        );
        generatedHidden = $('.hidden', hiddenDescription);
    }
    $('.view-details').click(function() {
        if (generatedHidden && generatedHidden.length) {
            shownFlag = !!generatedHidden.hasClass('hidden');
            $(this).text(shownFlag ? 'Hide details' : 'View details');
            generatedHidden.toggleClass('hidden');
        }
    });
});

// Toggling plus and minus icons for product details accordion
$(function($jq) {
    var pdpAccordion = $jq(".pdp-accord-toggle"),
        contextPanelGroup = pdpAccordion.parents('.panel-group-pdp');

    pdpAccordion.click(function(e) {
        var context = $jq(this),
            contextPanel = context.parents('.panel-default'),
            contextButton = $jq('.accordion-plus', contextPanel);

        contextButton.toggleClass('accordion-minus');

        // Remove minus class on all other buttons
        contextPanelGroup.find('.accordion-plus').not(contextButton).removeClass('accordion-minus');
    });
});

// Slick gallery init
$(document).ready(function() {
  $('.gallery-mobile').slick({
    dots: true
  });
});

// Slick reviews init
$(document).ready(function() {
  $('.reviews-mobile').slick({
      dots: true
  });
});

/*****************************************************************************/
/*
/* CART PAGE
/*
/*****************************************************************************/

// Quantity counter / spinner
(function() {
  window.inputNumber = function(el) {
    var min = el.attr('min') || false;
    var max = el.attr('max') || false;
    el.each(function() {
      init($(this));
    });
    function init(el) {
      el.prev().on('click', decrement);
      el.next().on('click', increment);
      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }
      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  };
})();
inputNumber($('.input-number'));

// jQuery UI - Tooltip on hover
$( ".promo-info-text, .delivery-est, .security-code-info" ).tooltip();

/*****************************************************************************/
/*
/* CHECKOUT-SHIPPING PAGE
/*
/*****************************************************************************/

// Slide toggle different shipping address on click
$( "#different-billing-checkbox" ).click(function() {
  $( "#different-billing-address" ).slideToggle( "slow" )
});

/*****************************************************************************/
/*
/* CHECKOUT-PAYMENT PAGE
/*
/*****************************************************************************/

// Show credit card input fields only on 'credit card' selected
$('#credit-card-input-field').hide();

$('.payment-text').change(function() {
  if($('#payment-type-credit-card').is(':checked')) {
    $('#credit-card-input-field').show();
  } else {
    $('#credit-card-input-field').hide();
  }
})