//Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

const inpt = document.querySelector('#inpt')

inpt.addEventListener('blur', func)

// function func (){
//     let str = inpt.value;
//     let arr = str.split('.')
//     let mass = []
//     let x = []
//     for (let i = 0; i < arr.length; i++) {
//         mass = arr.slice()
//         x = `${mass[i]}-${mass[i-1]}-${mass[i-2]}` 
//     }
    
//     inpt.value = x;
// }

//or

function func(){
    let str = inpt.value;
    let arr = str.split('.');
    let mass = []
    mass = arr.reverse()
    let arr1 = mass.join('-')
    inpt.value = arr1
}