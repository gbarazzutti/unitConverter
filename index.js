const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-el")

const meterToFeet = 3.281
const feetToMeter = 0.3048
const literToGallon = 0.264
const gallonToLiter = 3.78541
const kiloToPound = 2.204
const poundToKilo = 0.453592

convertBtn.addEventListener("click", function (){
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(2)} meter`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(2)} liters`
    massEl.textContent = `${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(2)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(2)} kilograms`
    
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/