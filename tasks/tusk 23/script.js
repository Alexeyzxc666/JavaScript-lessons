//Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

const inpt = document.querySelector('#res')

inpt.addEventListener('blur',func)

function func(){
    if(inpt.value === 1 || inpt.value <= 100){
        inpt.classList.add('green')
        
    }else{
        inpt.classList.add('red')
    }
}

inpt.addEventListener('focus',()=>{
    inpt.classList.remove('green')
    inpt.classList.remove('red')
})