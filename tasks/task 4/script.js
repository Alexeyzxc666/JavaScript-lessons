//Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

const input = document.querySelector('input')
const p = document.querySelector('#result')
input.addEventListener('blur', func)

function func (){
    let sum = 0;
    let str = input.value
    let arr = str.split(',')
    for(var i = 0; i < arr.length; i++){
        sum += +arr[i]
    }
    x = sum/arr.length
    p.innerHTML = x
}
