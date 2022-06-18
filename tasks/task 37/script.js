// Даны чекбокс. Дана кнопка. По нажатию на кнопку сделайте все чекбоксы отмеченными.

const inpt = document.querySelectorAll('input');
const btn = document.querySelector('#btn');

btn.addEventListener('click',func);
let x = 0;
function func(){
    x++;
    inpt.forEach(data=>{
        data.checked = true;
    })
    if(x===2){
        inpt.forEach(data=>{
            data.checked = false;
            x=0;
        })
    }
}