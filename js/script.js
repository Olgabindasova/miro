/*$(document).ready(function(){
 
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
     
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
     
    if(window.location.hash) {
      var hash = window.location.hash;
  
      var modal = UIkit.modal(hash);
  
      if ( modal ) {
          modal.show();
      }
  }
  
    });
  */
  $(function() {
  
    $("#phone").mask("+7 (999) 999-99-99");
    $(".phone").mask("+7 (999) 999-99-99");
  });

  