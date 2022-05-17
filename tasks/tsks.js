//Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут.

const button = document.querySelector('#btn')

let inputOne = document.getElementById('val')
let inputTwo = document.getElementById('valu')
let inputThree = document.getElementById('vall')
let inputSum = document.getElementById('bbb')

button.addEventListener('click', ()=> {
    inputFour = Number(inputOne.value) + Number(inputTwo.value) + Number(inputThree.value)
    console.log(inputFour)
    inputSum.value = inputFour
})

