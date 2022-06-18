// Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты

const input = document.querySelector('input')



input.addEventListener('blur',()=>{
    let name = document.querySelectorAll('.name')
    let x = input.value
    let arr = x.split(' ')
    for (let i = 0; i < arr.length; i++) {
        name[i].value = arr[i]
    }
})