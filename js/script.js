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
    $("#snils").mask("99999999999");
    $(".data-form-user").mask("99/99/9999");
    $("#index").mask("999999");
  });

  // добавляет класс active 

document.querySelector('.menu_one').addEventListener('click', () => {
  document.querySelector('.logo_lk').classList.add('active');
  document.querySelector('.lk-miro_menu').classList.add('active');
  document.querySelector('.menu_one').classList.add('active'); 
  document.querySelector('.logo_lk-img').classList.add('active');
  document.querySelector('.logo_lk-img-2').classList.add('active');
  document.querySelector('.lk-aside_menu').classList.add('active');
  document.querySelector('.close-menu').classList.add('close-menu-active');
  document.querySelector('.button-one_lk-header_text').classList.add('active');
})




// удаляет  класс  active

document.querySelector('.close-menu').addEventListener('click', () => {
  document.querySelector('.logo_lk').classList.remove('active');
  document.querySelector('.lk-miro_menu').classList.remove('active');
  document.querySelector('.menu_one').classList.remove('active'); 
  document.querySelector('.logo_lk-img').classList.remove('active');
  document.querySelector('.logo_lk-img-2').classList.remove('active');
  document.querySelector('.lk-aside_menu').classList.remove('active');
  document.querySelector('.close-menu').classList.remove('close-menu-active');
  document.querySelector('.button-one_lk-header_text').classList.remove('active');
})

 