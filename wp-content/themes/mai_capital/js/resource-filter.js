// filter category
jQuery('.resource_filter .cat-items').on('click', function() {
        var $this = jQuery(this);
        var cat = jQuery(this).attr('data-cat');
        jQuery('.resource_filter > ul > li').removeClass('active');
        $this.parent().addClass('active');
        jQuery('#loadingmessage').show();   
        jQuery('body').addClass('bodyoverlay');

        jQuery.ajax({
            type: "POST",
            url: ajax_obj.ajaxurl,
            data: {
                'resource_cat': cat,
                'action': 'resource_cat_filter'
            },
            success: function(data) {
                var json_obj = JSON.parse(data);
                jQuery('.resource-row').html(json_obj.html);
            }
        });
    });

    if(window.location.hash == '#Acquisitions') {
        jQuery('.cat-items[data-cat="32"]').click();
    }   

