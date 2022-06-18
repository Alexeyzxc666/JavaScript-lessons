//Даны инпуты с числами. Произвольное количетсво, пусть три. В первый инпут запишите 1, через секунду во второй инпут запишите 2, еще через секунду в третий инпут 3, потом через секунду в первый инпут запишите 4, во второй 5 и так далее до бесконечности.

const inpt = document.querySelectorAll('#inpt')
const btn = document.querySelector('#btn')

btn.addEventListener('click',start)
let i = 0;
let g = 0;
function func(){
    if(g >=3){
        g = 0
    }
    inpt[g].value = i+1
    i++;
    g++;
}

function start(){
    setInterval(func,1000)
}

