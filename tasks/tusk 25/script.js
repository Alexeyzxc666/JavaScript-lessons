//Даны абзацы с числами. По нажатию на кнопку найдите абзац, в котором хранится максимальное число, и сделайте его красного цвета. 

const pAll = document.querySelectorAll('p')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const inpt = document.querySelector('#inpt')


btn1.addEventListener('click', func)
btn2.addEventListener('click', func2)

function func2(){
    let x = inpt.value.split(' ')
    for(i = 0; i < pAll.length;i++){
        pAll[i].textContent = x[i]
    }
}



function func(){
    let arr = [];
    let x;
    for (let i = 0; i < pAll.length; i++) {
        arr.push(pAll[i].textContent)
    }
    arr.sort((a,b) => a-b)
    x = arr.slice(-1)
    pAll.forEach(p=>{
        if(p.textContent == x){
            p.classList.add('red')
        }
    })
}
