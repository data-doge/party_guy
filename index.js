$(document).ready(function () {

  for (var i = 1; i < 100; i++) {
    var color = ( i % 2 === 0 ? 'red' : 'black');
    $circle = $("<div class='centered circle'></div>").css({
      'background' : color,
      'height': 5* i,
      'width': 5* i,
      'z-index' : -1 * i
    });
    $('body').append($circle);
  }

  // for (var i = 0; i < 100; i++) {
  //   var $dot = $("<div class='centered dot'></div>")
  //   $('body').append($dot);
  // }

  // $.each($('.dot'), function (index, value) {

  //   var degrees = 0;

  //   setInterval(function () {
  //     var radius = 5* index + 12;
  //     var x = Math.round(radius * Math.cos(degrees * Math.PI / 180));
  //     var y = Math.round(radius * Math.sin(degrees * Math.PI / 180));
  //     $(value).css({
  //       'top' : y,
  //       'left' : x
  //     });
  //     degrees++;
  //   }, index + 30);

  // });

  $.each($('.circle'), function (index, value) {
    var degrees = 0;
    setInterval(function () {
      $(value).css({
        'webkit-transform' : 'rotate(-' + degrees + 'deg)'
      })
      degrees++;
    }, index + 30)
  });

  var degrees = 0;
  setInterval(function () {
    $('body').css({'webkit-transform' : 'rotate(-' + 5 * degrees + 'deg)'});
    degrees++;
  }, 30)

});