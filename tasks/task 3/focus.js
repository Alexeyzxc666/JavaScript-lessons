// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа. (События focus/blur)

const inpt = document.querySelector('input')

inpt.onblur = blur

function blur(){
    inpt.value = `${inpt.value / 2}+${inpt.value / 2}`;
};

