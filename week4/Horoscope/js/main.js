$(document).ready(function () {

  function startOverlay(overlayId) {

    $('.overlay-veil').fadeTo("500", "1", function () {
      var element = $('div[data-overlayItem="' + overlayId + '"]');

      element.fadeIn("300");
      element.addClass('active');

    })
  }

  function closeOverLayAll(overlayId) {
    $('.overlay-component').each(function () {
      if ($(this).hasClass('active')) {
        $('.overlay-veil').fadeOut();
        $(this).fadeOut("300", function () {
          $(this).removeClass('active')
        })
      }
    });
    if (overlayId !== false) {
      startOverlay(overlayId)
    }
  }

  $('.closeOverlay').on("click", function () {
    closeOverLayAll(false)
  });

  $('.overlay-item-click').on("click", function (e) {
    e.preventDefault();

    var overlayId = $(this).data("overlay");
    closeOverLayAll(overlayId);


  });



});

function zodiac(day, month) {
  var zodiac = ['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
  var last_day = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  return (day > last_day[month]) ? zodiac[month * 1 + 1] : zodiac[month];
}

document.getElementById('testZodiac').onclick = function () {
  document.getElementById('selectZodiac').innerHTML = zodiac(document.getElementById('selectDays').value, document.getElementById('selectMonth').value);
}
