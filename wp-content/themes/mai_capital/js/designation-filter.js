// filter category
jQuery(document).ready(function () {
    const stickyNav = document.querySelector('.designation_filter');
const initalPos = stickyNav.offsetTop;

window.addEventListener("scroll", () => {
  if(stickyNav.offsetTop > initalPos) {
    stickyNav.classList.add('isSticky');
  } else {
    stickyNav.classList.remove('isSticky');
  }
});
jQuery('.designation_filter .designation').on('click', function() {
        var $this = jQuery(this);
        var cat = jQuery(this).attr('data-cat');
        jQuery('.designation_filter ul li').removeClass('active');
        $this.parent().addClass('active');
        jQuery('#loadingmessage').show();   
        jQuery('body').addClass('bodyoverlay');

        jQuery.ajax({
            type: "POST",
            url: ajax_obj.ajaxurl,
            data: {
                'designation_cat': cat,
                'action': 'designation_cat_filter'
            },
            success: function(data) {
                var json_obj = JSON.parse(data);
          
                jQuery('.designation-row').html(json_obj.html);
                setTimeout(function(){
                 
                var target = '.leadership_block';
                if(jQuery(target).offset().top!='undefined'){
                    jQuery('html,body').animate({scrollTop:jQuery(target).offset().top},500);
                    }
                },500);
            }
        });
    });
});
   

