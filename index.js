const convBtn = document.getElementById("convert-btn")
const inputVal = document.getElementById("num")
const meter = 3.281
const liter = 0.264
const kilogram = 2.204
const mf = document.getElementById("meter-feet")
const lg = document.getElementById("liters-gallons")
const kp = document.getElementById("kilograms-pounds")

convBtn.addEventListener("click", function() {
   if (isNaN(inputVal.value)){
    alert('Enter a valid number');
   }
   else {
    convert()
   }
 
})

function convert() {
let mTof = inputVal.value * meter
let fTom = inputVal.value / meter
let lTog = inputVal.value * liter
let gTol = inputVal.value / liter
let kTop = inputVal.value * kilogram
let pTok = inputVal.value / kilogram
mf.textContent = `${inputVal.value} meters = ${mTof.toFixed(3)} feets | ${inputVal.value} feets = ${fTom.toFixed(3)} meters`
lg.textContent = `${inputVal.value} liters = ${lTog.toFixed(3)} gallons | ${inputVal.value} feets = ${gTol.toFixed(3)} liters`
kp.textContent = `${inputVal.value} kilos = ${kTop.toFixed(3)} pounds | ${inputVal.value} pounds = ${pTok.toFixed(3)} kilos`

}

