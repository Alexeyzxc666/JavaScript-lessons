//Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

const inpt = document.querySelector('#inpt')
const p = document.querySelector('#result')

inpt.addEventListener('blur',func )

function func(){
    let str = inpt.value
    let arr = str.split(' ')
    let num = 0;
    p.innerHTML = Object.keys(arr).length
}

// Так же можно использовать цикл

//for (let i = 0; i < arr.length; i++) {
//    num = i + 1;
//}
//p.innerHTML = num