// filter category
jQuery('.cat-item').on('click', function() {
        var $this = jQuery(this);
        var cat = jQuery(this).attr('data-cat');
        jQuery('.update_filter > ul > li').removeClass('active');
        $this.parent().addClass('active');
        jQuery('#loadingmessage').show();   
        jQuery('body').addClass('bodyoverlay');

        jQuery.ajax({
            type: "POST",
            url: ajax_object.ajaxurl,
            data: {
                'blog_cat': cat,
                'action': 'blog_cat_filter'
            },
            success: function(data) {
                var json_obj = JSON.parse(data);
                jQuery('.insight-row').html(json_obj.html);
            }
        });
    });



