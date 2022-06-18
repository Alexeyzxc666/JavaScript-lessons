//Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.

const inpt = document.querySelector('#res')
const btn = document.querySelector('#btn1')
const btn1 = document.querySelector('#btn2')

btn.addEventListener('click', func)
btn1.addEventListener('click', func1)

function func(){
    inpt.value = Number(inpt.value) + Number(1)
}
function func1(){
    inpt.value = Number(inpt.value) - Number(1)
    if(inpt.value <= 0){
        inpt.value = 0
    }
}

