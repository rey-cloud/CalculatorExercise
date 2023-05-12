var input = document.getElementById("inputNum");
var result = document.getElementById("result");

var results = 0; // initialize to 0
var fnum;

var operator;

function sum() {
  if (input.value == "") {
    fnum = 0;
  } else {
    fnum = parseFloat(input.value);
    results += fnum;
  }
  operator = "+";
}
function difference() {
  if (input.value == "") {
    fnum = 0;
  } else {
    fnum = parseFloat(input.value);
    results += fnum;
  }
  operator = "-";
}
function product() {
  if (input.value == "") {
    fnum = 0;
  } else {
    fnum = parseFloat(input.value);
    results += fnum;
  }
  operator = "*";
}
function quotient() {
  if (input.value == "") {
    fnum = 0;
  } else {
    fnum = parseFloat(input.value);
    results += fnum;
  }
  operator = "/";
}
function clear() {
  result.innerHTML = "0";
  results = 0;
}

function equals() {
  var inputVal = parseFloat(input.value);

  if (operator == "+") {
    results += inputVal;

    result.innerHTML = results;
    input.value = "";
  } else if (operator == "-") {
    results -= inputVal;

    result.innerHTML = results;
    input.value = "";
  } else if (operator == "*") {
    results *= inputVal;

    result.innerHTML = results;
    input.value = "";
  } else if (operator == "/") {
    results /= inputVal;

    result.innerHTML = results;
    input.value = "";
  }
}