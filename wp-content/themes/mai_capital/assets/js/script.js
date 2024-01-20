jQuery(document).ready(function () {

    $(".bottom-link").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 150
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });


        if ($(this).scrollTop() > 100) {
           $('body').addClass('sticky-header');
        } else {
           $('body').removeClass('sticky-header');
        }

        $(window).scroll(function(){
            if ($(this).scrollTop() > 50) {
                $('body').addClass('sticky-header');
            } else {
                $('body').removeClass('sticky-header');
            }
        });

        $( "button.navbar-toggler" ).on( "click", function() {
            $(this).next().slideToggle(500);
            $(this).toggleClass('active');
        });  

        jQuery('.community_slider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });

        jQuery('.logo_slider').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                575:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:4
                }
            }
        });



        jQuery( ".search-main" ).click(function() {
          jQuery( ".get_search_form" ).toggle();      
        });

        // copy link
        var $temp = $("<input>");
        var $url = $(location).attr('href');

        jQuery('.link_copy').on('click', function() {
          jQuery("body").append($temp);
          $temp.val($url).select();
          document.execCommand("copy");
          $temp.remove();
          $('.link_copy').append('<span id="add_here">URL copied!</span>');
        })

        // search
        jQuery(document).mouseup(function(e){
            var container = jQuery(".get_search_form");

            // If the target of the click isn't the container
            if(!container.is(e.target) && container.has(e.target).length === 0){
                container.hide();
            }
        });

       
        
            var width = jQuery(document).width();        
            if (width > 1400) {
                jQuery(".resource_tabs.team_filter ul li a").on("click", function() {       
                    jQuery(window).scrollTop(980);
                });
                jQuery(".scroll_top_icon").on("click", function() {       
                    jQuery(window).scrollTop(690);
                });
            }
            else if (width > 1200) {
                jQuery(".resource_tabs.team_filter ul li a").on("click", function() {       
                    jQuery(window).scrollTop(890);
                });
                jQuery(".scroll_top_icon").on("click", function() {       
                    jQuery(window).scrollTop(610);
                });
            }
            else if (width > 991) {
                jQuery(".resource_tabs.team_filter ul li a").on("click", function() {       
                    jQuery(window).scrollTop(700);
                });            
                 jQuery(".scroll_top_icon").on("click", function() {       
                    jQuery(window).scrollTop(450);
                });           
            }
            else{}


        
});


        
       




jQuery(document).ready(function() {


    jQuery('.history_head h2').each(function () {
        if (jQuery(this).text() == '1973') {        
            jQuery(this).parent().parent().addClass('first_div');
        }
    });

    var bigimage = jQuery(".big_slide");
    var thumbs = jQuery(".thumbs_slide");
    var syncedSecondary = true;
    bigimage.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false,
        dots: false,
        loop: true,  
        responsiveRefreshRate: 200
    }).on("changed.owl.carousel", syncPosition);

    thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
    })
    .owlCarousel({
        items: 10,
        dots: false,
        nav: false,  
        loop: false,
        slideBy: 1,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        responsiveRefreshRate: 100,
        responsive:{  
            319:{
                items:3
                
            },         
            375:{
                items:3
                
            },
            575:{
                items:5
                
            },
            768:{
                slideBy: 10                
            }
        }
    }).on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {    
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
          current = count;
        }
        if (current > count) {
          current = 0;
        }

        //to this
        thumbs.find(".owl-item").removeClass("current").eq(current).addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
       
        var start = thumbs.find(".owl-item.active") .first().index() + 1; 
       
        var end = thumbs.find(".owl-item.active").last().index();
        

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        // console.log(el);
        /*if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }*/
    }

    thumbs.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = jQuery(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });


    // var btn = $('#toptobottom');
    // var scroll_top = $('.inner_banner').height();
    // console.log(scroll_top);
    // $(window).scroll(function() {
    //   if ($(window).scrollTop() > 300) {
    //     btn.addClass('show');
    //   } else {
    //     btn.removeClass('show');
    //   }
    // });

    // btn.on('click', function(e) {
    //   e.preventDefault();
    //   $('html, body').animate({scrollTop:720}, '300');
    // });        
   
    if ($(window).width() > 767) {

        if (jQuery(".tab-nav").length !== 0) {
            var insight_sticky = jQuery(".tab-nav").offset().top + 0;
            jQuery(window).scroll(function() {
              var wscroll = jQuery(window).scrollTop() + 145;
              if (wscroll >= insight_sticky ) {
                jQuery('.tab-nav').addClass('active__sticky');
              } else {
                jQuery('.tab-nav').removeClass('active__sticky');
              }
            
            });
        }
    }


    // Show modal when About menu item is clicked
    jQuery(document).on("click",".service-funds",function(e) {
      e.preventDefault();
      jQuery('#fundenter').modal('show');
    });

    // Close modal when Close button is clicked
    jQuery('#fundenter .close, #close-btn, #continue-btn').click(function() {
      jQuery('#fundenter').modal('hide');
    });
  //Trigger click
  var hash = window.location.hash.slice(1); 
  if(hash!=''){
   jQuery('a[href="#'+hash+'"]'  ).trigger('click');   
  }

});