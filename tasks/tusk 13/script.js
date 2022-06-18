// Дан инпут. В него вводится число. Проверьте по вводу, что это число содержит внутри себя цифру 3. 

const inpt = document.querySelector('#inpt')
const btn = document.querySelector('#btn')
const p = document.querySelector('#result')
btn.addEventListener('click', func1)

function func1() {
    let str = inpt.value
    let bool = str.includes(3)
    if(bool){
        p.innerHTML = `Мы нашли цифру 3!`
    }else{
        p.innerHTML = `Мы не нашли цифру 3.`
    }
}

//or 

function func(){
    let str = inpt.value
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 3){
            p.innerHTML = `Мы нашли цифру 3!`
        }else{
            p.innerHTML = `Мы не нашли цифру 3.`
        }
        
    }
}