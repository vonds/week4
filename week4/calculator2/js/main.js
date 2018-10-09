$(document).ready(function () {
  $('#sum').on("click", function (e) {
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var sum = val1 + val2
    $('h2')[0].innerHTML = sum;
    console.log(val1);
    console.log(val2)
    e.preventDefault();
  });

  $('#sub').on("click", function (e) {
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var sum = val1 - val2
    $('h2')[0].innerHTML = sub;
    console.log(val1);
    console.log(val2)
    e.preventDefault();
  });

  $('#mul').on("click", function (e) {
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var mul = val1 * val2
    $('h2')[0].innerHTML = mul;
    console.log(val1);
    console.log(val2)
    e.preventDefault();
  });

  $('#div').on("click", function (e) {
    var val1 = parseInt(document.getElementById('val1').value)
    var val2 = parseInt(document.getElementById('val2').value)
    var div = val1 / val2
    $('h2')[0].innerHTML = div;
    console.log(val1);
    console.log(val2)
    e.preventDefault();
  });

});





