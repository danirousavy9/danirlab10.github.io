function calcOutputAdd(x,y){
  var x=document.getElementById("number1").value;
  var y=document.getElementById("number2").value;

  var result= parseFloat(x)+parseFloat(y);
  document.getElementById("output").innerHTML= result;
}

function calcOutputSubtract(x,y){
  var x=document.getElementById("number1").value;
  var y=document.getElementById("number2").value;

  var result= parseFloat(x)-parseFloat(y);
  document.getElementById("output").innerHTML= result;
}


function calcOutputMultiply(x,y){
  var x=document.getElementById("number1").value;
  var y=document.getElementById("number2").value;

  var result= parseFloat(x)*parseFloat(y);

  document. getElementById("output").innerHTML = result;
}


function calcOutputDivide(x,y){
  var x=document.getElementById("number1").value;
  var y=document.getElementById("number2").value;
  var result= parseFloat(x)/parseFloat(y);
  document. getElementById("output").innerHTML= result;
}

function calcOutputExponential(x,y){
  var x=document.getElementById("number1").value;
  var y=document.getElementById("number2").value;
  var result= Math.pow(2,2);
  document. getElementById("output").innerHTML= result;
}
