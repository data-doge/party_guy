$(document).ready(function () {

  for (var i = 1; i < 30; i++) {
    var color = ( i % 2 === 0 ? 'red' : 'black');
    $circle = $("<div class='centered circle'></div>").css({
      'background' : color,
      'height': 24 * i,
      'width': 24 * i,
      'z-index' : -1 * i
    });
    $('body').append($circle);
  }

  for (var i = 0; i < 30; i++) {
    var $dot = $("<div class='centered dot'></div>")
    $('body').append($dot);
  }

  $.each($('.dot'), function (index, value) {

    var degrees = 0;

    setInterval(function () {
      var radius = 24 * index + 12;
      var x = Math.round(radius * Math.cos(degrees * Math.PI / 180));
      var y = Math.round(radius * Math.sin(degrees * Math.PI / 180));
      $(value).css({
        'top' : y,
        'left' : x
      });
      degrees++;
    }, index + 15);

  });

  $.each($('.circle'), function (index, value) {
    var degrees = 0;
    setInterval(function () {
      $(value).css({
        'webkit-transform' : 'rotate(-' + degrees + 'deg)'
      })
      degrees++;
    }, index + 15)
  });

  var degrees = 0;
  setInterval(function () {
    $('body').css({'webkit-transform' : 'rotate(-' + 100 * degrees + 'deg)'});
    degrees++;
  }, 15)

});