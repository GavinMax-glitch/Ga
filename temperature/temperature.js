function convertCheck() {
    var temp = parseFloat(document.getElementById("tempIn").value);
    var type = document.getElementById("typeIn").value.toLowerCase();
    var convert = document.getElementById("convertIn").value.toLowerCase();
    var result = "";

    if (isNaN(temp)) {
        result = "Please enter a valid temperature.";
    } else if (type === "f" && convert === "c") {
        result = ((temp - 32) * 5 / 9).toFixed(2);
    } else if (type === "f" && convert === "k") {
        result = (((temp - 32) * 5 / 9) + 273.15).toFixed(2);
    } else if (type === "c" && convert === "f") {
        result = ((temp * 9 / 5) + 32).toFixed(2);
    } else if (type === "c" && convert === "k") {
        result = (temp + 273.15).toFixed(2);
    } else if (type === "k" && convert === "f") {
        result = (((temp - 273.15) * 9 / 5) + 32).toFixed(2);
    } else if (type === "k" && convert === "c") {
        result = (temp - 273.15).toFixed(2);
    } else {
        result = temp;
    }

    document.getElementById("result").innerHTML = result;
}