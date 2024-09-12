$(function(){
  //hide header on scroll down
  
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var headerHeight = $('#header_wrap').outerHeight();
 

  $(window).scroll(function(event){
      didScroll = true;
  });
  

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  

  function hasScrolled(){   
      var scr_top = $(this).scrollTop();     

      //make sure they scroll more than delta
      if(Math.abs(lastScrollTop - scr_top) <= delta)
          return;
      if (scr_top > lastScrollTop && scr_top > headerHeight){
          // Scroll Down
          $('#header_wrap').removeClass('down').addClass('up');
      }else{
          //scroll up
          if(scr_top + $(window).height() < $(document).height()){
              $('#header_wrap').removeClass('up').addClass('down');

              //헤더 흰색으로 변경
              $('header>#logo>a').css({
                  'background-position':'0 -70px'
              })
              //메뉴 흰색으로 변경
              $('#main_menu>li>a').css({
                  'color':'#fff'
              });

          }
         
      }
      lastScrollTop = scr_top;
  }

  
});