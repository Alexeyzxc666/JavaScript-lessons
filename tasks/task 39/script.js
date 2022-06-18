//Спросите у пользователя какие языки (html, css, js, php) он знает с помощью чекбоксов. Выбранные языки должны выводится в абзац ниже через запятую.

const inpt = document.querySelectorAll('input');
const p = document.querySelector('#p');
const btn = document.querySelector('#btn');

btn.addEventListener('click', func);
let mass = [];
function func(){
    p.innerHTML = ''
    inpt.forEach(data=>{
        if(data.checked){
            mass.push(data.value)
            p.innerHTML = mass
        }
    })
    mass = [];
};