function convert(type) {
    let input1 = document.getElementById("fahrenheit");
    let input2 = document.getElementById("celsius");
    let output1 = document.getElementById("answer1");
    let output2 = document.getElementById("answer2");
    if (type === "fahrenheit") {
      let fahrenheit = parseFloat(input1.value);
      if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * (5 / 9);
        output1.value = celsius.toFixed(2) + " °C";
      } else {
        output1.value = "Invalid input";
      }
    } else if (type === "celsius") {
      let celsius = parseFloat(input2.value);
      if (!isNaN(celsius)) {
        let fahrenheit = (celsius * (9 / 5)) + 32;
        output2.value = fahrenheit.toFixed(2) + " °F";
      } else {
        output2.value = "Invalid input";b
      }
    }
  }

let erase = document.getElementById("fahrenheit")
let erase2 = document.getElementById("celsius")
let erase3 = document.getElementById("answer1")
let erase4 = document.getElementById("answer2")
let clearAll = () =>{
    erase.value = '';
    erase2.value = '';
    erase3.value = '';
    erase4.value = '';
}