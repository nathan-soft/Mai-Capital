jQuery(document).ready(function () {
 
      $('.joined_video_link .click').click(function () {
            var image = $(this).closest('.joined_video_link').find('video').attr('poster');
            var title = jQuery(this).parent().siblings('.joined_name').find('h3').html();
            var designation = jQuery(this).parent().siblings('.joined_name').find('#designation').html();
            var content = jQuery(this).parent().siblings('.joined_name').find('#description').html();

             jQuery('#video_modal #video video').attr('poster',image);
             jQuery('#video_modal .joined_name #description-modal').html(content);
             jQuery('#video_modal .joined_name h3').html(title);
             jQuery('#video_modal .joined_name #designation-modal').html(designation);
             
      });
 
    });