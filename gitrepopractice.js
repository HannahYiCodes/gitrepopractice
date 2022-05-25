// farenheit to celsius
// celsius to farenheit {TWO BLANKS}
// while you type it shows

let userInputF = document.getElementById('f').value
let userInputC = document.getElementById('c').value
let f_output = document.getElementById('f_output').innerHTML
let c_output = document.getElementById('c_output').innerHTML

celsiusToF = () => {
f_output.innerHTML = ((userInputF - 32)*.5556) // f to c
}


farenheitToC = () => {
c_output.innerHTML = ((userInputC*1.8) + 32) // c to f
}
