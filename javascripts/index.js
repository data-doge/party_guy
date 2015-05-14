var circleRotationOffsetSpeed = randPosInt(50);
var bodyRotationSpeed = 30;

$(window).load(function () {

  for (var i = 1; i < 100; i++) {
    var color = ( i % 2 === 0 ? 'red' : 'black');
    var $circle = $("<div class='centered circle'></div>").css({
      'background' : color,
      'height': 5 * i,
      'width': 5 * i,
      'z-index' : -1 * i
    });
    $('body').append($circle);
  }

  $.each($('.circle'), function (index, value) {
    var degrees = 0;
    setInterval(function () {
      $(value).css({'webkit-transform' : 'rotate(-' + degrees + 'deg)'})
      degrees++;
    }, index + circleRotationOffsetSpeed)
  });

  var degrees = 0;
  setInterval(function () {
    $('body').css({'webkit-transform' : 'rotate(-' + 5 * degrees + 'deg)'});
    degrees++;
  }, bodyRotationSpeed)

});