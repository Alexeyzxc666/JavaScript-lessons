//Модифицируйте предыдущую задачу так, чтобы был еще один инпут, в котором задается длина случайной строки

const inpt = document.querySelector('#inpt')
const inpt2 = document.querySelector('#inpt2')
const btn = document.querySelector('#btn')

btn.addEventListener('click', func)
let random = ['s', '2', 'd', 'y', '#', '%', 'W', 'q','j', 'e','3','9', 'I','L','o','b','R','a']


function func() {
    let str = '';
    let x = [7, 8, 9, 10, 11, 12]
    let number = x[Math.floor(Math.random() * x.length)]
    for (let i = 0; i < number; i++) {
        str += random[Math.floor(Math.random() * random.length)]
        inpt.value = str;
        inpt2.value = str.length
    }
}
