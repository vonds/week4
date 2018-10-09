$(document).ready(function () {
  $(document).keydown(function (e) {
    var left = 37;
    var up = 38;
    var right = 39
    var down = 40;

    if (e.which === left) {
      $('.catBug').css({ right: "+=8px" });
      console.log(e.which);
    }

    if (e.which === right) {
      $('.catBug').css({ right: "-=8px" });
      console.log(e.which);
    }

    if (e.which === down) {
      $('.catBug').css({ top: "+=8px" });
      console.log(e.which);
    }

    if (e.which === up) {
      $('.catBug').css({ top: "-=8px" });
      console.log(e.which);
    }
  })



});