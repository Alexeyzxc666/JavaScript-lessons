//Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.

const inpt = document.querySelector('#inpt')

function func(){
    inpt.value = Number(inpt.value) * Number(inpt.value)
}


setInterval(func,1000)