
/* --------------------------------------------------------------------------------
ajax form submitter
---------------------------------------------------------------------------------*/

function sendEmail (name,email,message) {
  var data = {name: name, email: email, message: message};
  console.log("sending email: " + name + " | " + email + " | " + message);
	$.ajax({
    url:"../act_mail.php",
    type: "get",
    data: data,
    success: function() {
      $("#sent").show();
      console.log("email sent!");
    }
	});
    return false;
}

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
    
    $("#blog .section-btn").each(function( obj, value ) {
      if (obj > 0) {
        $(this).height($("#blog .section-btn:eq(0)").height());
      }
    });

    $(".service-thumb").each(function( obj, value ) {
      if (obj < 3) {
        $(this).height($(".service-thumb:eq(3)").height());
      }
    });
  });



  /* HTML document is loaded. DOM is ready. 
  -------------------------------------------*/

  $(document).ready(function() {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });



  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.2);
    $('#experience').parallax("100%", 0.3);
    $('#education').parallax("100%", 0.1);
    $('#quotes').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();



  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/
  
    $(function() {
        $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });
  


  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();

  /*-------------------------------------------------------------------------------
    blog buttons
  -------------------------------------------------------------------------------*/


    $("input[type=submit]").click(function() {
      if ($("input[name=fullname]").val() != "" && $("input[name=email]").val() != "" && $("textarea[name=message]").val() != "") {
        return sendEmail($("input[name=fullname]").val(),$("input[name=email]").val(),$("textarea[name=message]").val());
      } else {
        $("#validate").show();
      }
    });

    $("input").keyup(function() {
      $("#sent").hide();
      $("#validate").hide();
    })
  });

  $(window).resize(function() {
    $("#blog .section-btn").each(function( obj, value ) {
      if (obj > 0) {
        $(this).height($("#blog .section-btn:eq(0)").height());
      }
    });
    $(".service-thumb").each(function( obj, value ) {
      if (obj < 3) {
        $(this).height($(".service-thumb:eq(3)").height());
      }
    });

  })


