// taxonomy filter

jQuery(document).ready(function () {
  $ = jQuery;
 // var data;
  $('#location,#keyword').on('input', function () {
    if (event.keyCode == 13) {
        return false;
    }
    else{
      filter_data();
    }
  });
  function filter_data()
  {
    var selected_val = $('#location').find(":selected").val();
    var keyword=  $('#keyword').val();
       jQuery.ajax({
        type: "POST",
        url: ajax_posts.ajaxurl,
        data: { action: 'filter_post',location:selected_val,keyword:keyword},
        success: function(data) {
            jQuery(".after_filter_div").show();
            jQuery(".leadership_block,#location_category").css('display','none');
           // if(jQuery(('#keyword')&&('#location')).val() ==''){
          if((jQuery('#keyword').val() == '')&&(jQuery('#location').val() == '')){
            console.log("Called"); 
          jQuery(".leadership_block,#location_category").css('display','');
           jQuery(".after_filter_div").hide();
        }
            jQuery('.after_filter_div').html( data );
        }
    });
  }
})

