//  Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что Это слово читается с начала и с конца одинаково  (например, мадам).

const inpt = document.querySelector('#inpt')
const btn = document.querySelector('#btn')
const p = document.querySelector('#result')

btn.addEventListener('click', func)


function func(){
    let str = inpt.value
    let arr2 = inpt.value.split('')
    let arr = str.split('')
    let reverse = arr.reverse()
    for (let i = 0; i < arr.length; i++) {
        if(arr2[i].toLowerCase() == reverse[i].toLowerCase()){
        p.innerHTML = `Это слово читается с начала и с конца одинаково.`
    }else{
        p.innerHTML = `Это слово не читается с начала и с конца одинаково.`
    } 
        
    }


   
    
    
    
}