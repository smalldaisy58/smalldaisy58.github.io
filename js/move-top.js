
$(function(){
    $("#toTop").mousedown(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },800);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#toTop').fadeIn("fast");
        } else {
            $('#toTop').stop().fadeOut("fast");
        }
    });
});
