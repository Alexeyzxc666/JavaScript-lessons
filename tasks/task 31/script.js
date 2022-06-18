// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.

const inpt = document.querySelector('#inpt')
const p = document.querySelector('#res')

inpt.addEventListener('blur', func)

let timer;

function func(time){
    let x = inpt.value
    p.innerHTML = x
    timer = setInterval(()=>{
        p.innerHTML = p.innerHTML - 1
        if(p.textContent <= 0 ){
        clearInterval(timer)
        p.innerHTML = ''
    }
    },1000)
    
}
inpt.addEventListener('focus', func1)

function func1(){
    clearInterval(timer)
    console.log('hi')
}