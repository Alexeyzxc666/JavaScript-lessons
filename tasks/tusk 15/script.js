//Даны N абзацев с числами. По нажатию на кнопку выведите эти числа в инпут через запятую в порядке возрастания

const inpt = document.querySelector('#inpt')
const btn = document.querySelector('#btn')
const p = document.querySelectorAll('#result')

btn.addEventListener('click', func)

function func(){
    let arr = [];
    for (let i = 0; i < p.length; i++) {
        arr.push(p[i].textContent)
        arr.sort()
    }
    inpt.value = arr.join(',')
}