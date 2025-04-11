function checkORE() {
    var number = document.getElementById("numberInput").value;
    var ResultDiv = document.getElementById("result");
    var result = "";
    if (isNaN(number) || number == "") {
        result = "That's not number please delete and try again";
        
    }
    else if (number % 2 == 0) {
        result = "your number is even";
        
    } else {
        result = "your number is odd";
        
    }
    ResultDiv.innerHTML = result;
}