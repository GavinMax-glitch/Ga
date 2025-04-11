function Exp() {
    var number1 = parseInt(document.getElementById("numberInput1").value);
    var number2 = parseInt(document.getElementById("numberInput2").value);
    var number3 = number1 ** number2;
    var resultDiv = document.getElementById("result");
    document.getElementById("result").innerHTML = "Result " + number3;
}