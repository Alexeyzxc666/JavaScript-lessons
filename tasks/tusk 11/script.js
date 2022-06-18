// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату. 

const inpt = document.querySelector('#inpt')
const p = document.querySelector('#result')

inpt.addEventListener('blur', func)

function func(){
    let str = inpt.value;
    let some = new Date(str)
    let x = getWeekDay(some)
    function getWeekDay(date){
        let days = ['в Воскресенье','в Понедельник','во Вторник','в Среду','в Четверг','в Пятницу','в Субботу']
        return days[date.getDay()]
    }
    p.innerHTML = `Вы родились ${x}`
}