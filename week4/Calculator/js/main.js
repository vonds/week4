document.getElementById('sum').onclick = numSum;
document.getElementById('sub').onclick = numSub;
document.getElementById('mul').onclick = numMul;
document.getElementById('div').onclick = numDiv;

function numSum() {
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sum = val1 + val2
  document.getElementsByTagName('h2')[0].innerHTML = sum;
  console.log(val1);
  console.log(val2)
}

function numSub() {
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var sub = val1 - val2;
  document.getElementsByTagName('h2')[0].innerHTML = sub;
}

function numMul() {
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var mul = val1 * val2;
  document.getElementsByTagName('h2')[0].innerHTML = mul;
}

function numDiv() {
  var val1 = parseInt(document.getElementById('val1').value)
  var val2 = parseInt(document.getElementById('val2').value)
  var div = val1 / val2
  document.getElementsByTagName('h2')[0].innerHTML = div;
}



