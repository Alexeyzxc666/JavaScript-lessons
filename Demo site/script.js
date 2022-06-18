// slider img
var i = 0;
var images = [];
var time = 2200;

images[0] = 'images/image7.jpg';
images[1] = 'images/image5.webp';
images[2] = 'images/image6.avif';

function slideShow() {
    document.slideShow.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('slideShow()', time)
};
window.onload = slideShow;

//modal window

const enter = document.querySelector('.enter');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close')

modalClose.addEventListener('click', () => {
    closeModal();
});

enter.addEventListener('click', () => {
    openModal();
});

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
};
const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
};
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
})

// date timer

const deadline = '2022-06-30'

function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()), // parse преобразует в миллисекунды
        days = Math.floor(t / (1000 * 60 * 60 * 24)), // получем мс в сутках
        hours = Math.floor((t / (1000 * 60 * 60) % 24 )), // % отдает остаток( то есть после 24 счет начинается заново)
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
};

function zero(num){
    if(num >= 0 && num < 10){
        return `0${num}`
    }else{
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timerInterval = setInterval(updateClock, 1000);
   
    updateClock();

    function updateClock() {
        const t = getTime(endtime);

        days.innerHTML = zero(t.days);
        hours.innerHTML = zero(t.hours);
        minutes.innerHTML = zero(t.minutes);
        seconds.innerHTML = zero(t.seconds);

        if(t.total <= 0){
            clearInterval(timerInterval)
        }

    }


};

setClock('#timer', deadline)

//jquerry

