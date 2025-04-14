function forloop() {
    //to set all the user input
    var flStart = parseInt(document.getElementById("start").value);
    var flEnd = parseInt(document.getElementById("end").value);
    var flAOM = parseInt(document.getElementById("AOM").value);
    var resultDiv = document.getElementById("result");
    //clear previous result
    resultDiv.innerHTML = "";
    //to check the inputs are vaild
    if (isNaN(flStart) || isNaN(flEnd) || isNaN(flAOM)) {
        ressultDiv.innerHTML = "Please enter valid numbers!";
        return
    }
    if (flAOM === 0) {
        resultDiv.innerHTML = "Increment cannot be zero!"
    }
    if ((flAOM > 0 && flStart > flEnd) || (flAOM < 0 && flStart < flEnd)) {
        resultDiv.innerHTML = "Increment value does not match range direction!";
    }
    for (var number = flStart; (flAOM > 0 ? number <= flEnd : number >= flEnd); number += flAOM) {
        resultDiv.innerHTML += number + "<br>";
    }
}