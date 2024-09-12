$(window).load(function(){

  var $product_list = $('#product_list'); //ul
  var $product_list_width = $product_list.width();
  var li = $product_list.children(); //li
  var li_width = li.outerWidth(true); // li너비
  var img_number = $product_list.children().size(); //li갯수
  var current_position; //현재위치
  var probtn  = $('#left_Btn'); //이전버튼
  var nextbtn = $('#right_Btn'); //다음버튼

//로드 하자마자 실행할 함수
init();
productReset();

function init(){ //초기함수 설정
  $(window).on('resize', productReset);
  probtn.on('click', pro_prev);
  nextbtn.on('click', pro_next);
  $product_list.children().last().prependTo($product_list);
}

function productReset(){
  current_position = $product_list.position().left; //ul현재위치
  $product_list.not(':animated').animate({
      'left':current_position+li_width
  },500, 'easeOutExpo', function(){

      $product_list.children().last().prependTo($product_list)
      $product_list.css({
          'left': -li_width
      });

  });
  //ul의 애니메이션 상태가 아니라면, ul의 current_position에 li_width값을 더해서 움직임(왼쪽으로) ul의 position값을 초기화함
}
function pro_prev(){ //이전버튼 li요소가 오른쪽으로 가야함으로
  current_position =$product_list.position().left; 
  $product_list.not(':animated').animate({
      'left': current_position + li_width
  }, 500, "easeOutExpo", function(){

      $product_list.children().last().prependTo($product_list)
      $product_list.css({
          'left': -li_width
      });
  });
  //ul이 애니메이션 상태가 아니라면, ul의 현재위치에 li_width값을 더해서 왼쪽으로 움직임
}

function pro_next(){ //다음버튼
  current_position = $product_list.position().left; //현재위치= ul의 position().left값
  $product_list.not(':animated').animate({
      'left': current_position - li_width
  }, 500, 'easeOutExpo', function(){

      $product_list.children().first().appendTo($product_list)
      $product_list.css({
          'left': -li_width
      });
  });
  //ul이 애니메이션 상태가 아니라면 ul의 current_position에 li_width값을 빼서 오른쪽으로 움직임 그리고 ul의 포지션값을 초기화함

}


});