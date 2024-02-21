$(window).scroll(function() {
  var wins = $(this).scrollTop(); // 위에서 윈도우에서 나는 차이값
  var hei = $('#main').outerHeight(); // 메인의 높이값
  var hei2 = $(window).outerHeight(); // 보이는 브라우저 높이값
  var height = hei - hei2; // 메인-윈도우 높이값 ex) 5000 - 543 = 4457
  var bar = (wins / height) * 100; // 차이나는값/height * 100

  $(".sub-line").css('width', bar+'%');

  $(".percent-box").find("p").text(Math.round(bar) + "%");
});