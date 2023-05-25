function convert(type) {
    var input1 = document.getElementById("fahrenheit");
    var input2 = document.getElementById("celsius");
    var output1 = document.getElementById("answer1");
    var output2 = document.getElementById("answer2");
    if (type === "fahrenheit") {
      var fahrenheit = parseFloat(input1.value);
      if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * (5 / 9);
        output1.value = celsius.toFixed(2) + " °C";
      } else {
        output1.value = "Invalid input";
      }
    } else if (type === "celsius") {
      var celsius = parseFloat(input2.value);
      if (!isNaN(celsius)) {
        var fahrenheit = (celsius * (9 / 5)) + 32;
        output2.value = fahrenheit.toFixed(2) + " °F";
      } else {
        output2.value = "Invalid input";b
      }
    }
  }