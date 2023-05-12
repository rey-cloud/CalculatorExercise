var input = document.getElementById("inputNum")
var displayRes = document.getElementById("result")
var isFirst = true;
var result = 0;
var operator;


function sum(){
  if (isFirst) {
    result += parseFloat(input.value);
    isFirst = false;
  }
  operator = '+';
}
function difference(){
  if (isFirst) {
    result += parseFloat(input.value);
    isFirst = false;
  }
  operator = '-';
}
function product(){
  if (isFirst) {
    result += parseFloat(input.value);
    isFirst = false;
  }
  operator = '*';
}
function quotient(){
  if (isFirst) {
    result += parseFloat(input.value);
    isFirst = false;
  }
  operator = '/';
}
function clearRes() {
  result = 0;
  displayRes.innerHTML = "";
  isFirst = true;
  input.value = '';
}

function equals() {
  var valu = parseFloat(input.value);

  if (operator == '+') {
    result += valu;
  }
  else if (operator == '-') {
    result -= valu;
  }
  else if (operator == '*') {
    result *= valu;
  }
  else if (operator == '/') {
    result /= valu;
  }
  displayRes.innerHTML = result;
}
