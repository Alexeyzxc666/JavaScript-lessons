// Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result"

const btn = document.querySelector('#btn')
const inpt = document.querySelectorAll('.num')
let parag = document.querySelector('#result')
let a = [];

btn.addEventListener('click',()=> {
    inpt.forEach(input => {
    a.push(Number(input.value))
    })
    sum = a[0] + a[1] + a[2]
    parag.innerHTML = + `${sum}`
})
