//Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).

const input = document.querySelector('#input')

input.addEventListener('blur', ()=>{
    let str = input.value;
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
        arr[i][0] = arr[i][0].toUpperCase();  
        arr[i] = arr[i].join('')
    }   
    input.value = arr.join(' ')
})