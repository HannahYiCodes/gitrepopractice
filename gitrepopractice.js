// farenheit to celsius
// celsius to farenheit 

const userInputF = document.getElementById('f').value
const userInputC = document.getElementById('c').value

let f_output = document.getElementById('f_output').innerHTML
let c_output = document.getElementById('c_output').innerHTML

farenheitToC = () => {
    document.getElementById('f_output').innerHTML = (((document.getElementById('f').value) - 32) * 0.5556) // f to c
}

celsiusToF = () => {
    document.getElementById('c_output').innerHTML = (((document.getElementById('c').value) * 1.8) + 32) // c to f
}