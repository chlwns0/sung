$(function () {
  $("#main_menu li").mouseenter(function () {
    $("ol", this).stop().slideDown("2000");
  });

  $("#main_menu li").mouseleave(function () {
    $("ol", this).stop().slideUp("2000");
  });
});
