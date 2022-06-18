//Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.

const inpt = document.querySelector('#inpt')
const p = document.querySelector('#result')

inpt.addEventListener('blur', func)

function func() {
    let max = 0;
    let mass = [];
    let str = inpt.value
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        let num = 0;
        console.log(mass = arr[i].split(''))
        for(let s = 0; s < mass.length; s++){
            console.log(num += 1)
        }
        if(num > max){
            max=num
        }
    }
p.innerHTML = max
}

