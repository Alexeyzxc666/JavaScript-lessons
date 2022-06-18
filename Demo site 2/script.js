$(function () {
    const ocean = document.querySelector('#ocean');
    const ocean2 = document.querySelector('#ocean2');
    const ocean3 = document.querySelector('#ocean3');
    const text = document.querySelector('#text');
    const text2 = document.querySelector('#text2');
    const text3 = document.querySelector('#text3');
    const firstText = $('.firstText p').text();// .text() - может поменять или задать текст на странице.
    // const firstText2 = $('.firstText p').hide(3000, function(){});//.hide() - прячет элемент. В скобках миллисекунды за которые исчезает текст
    // const firstText3 = $('.firstText p').show();//.show() - показывает элемент.

    ocean.addEventListener('click', func);
    ocean2.addEventListener('click', func2);
    ocean3.addEventListener('click', func3);
    let x;
    function func(e) {
        ocean.classList.remove('show')
        ocean.classList.add('hide')
        text.classList.remove('hide')
        text.classList.add('show')
        x = 1;
        event.preventDefault()
    }
    function func2(e) {
        if (x === 1) {
            ocean2.classList.remove('show')
            ocean2.classList.add('hide')
            text2.classList.remove('hide')
            text2.classList.add('show')
            event.preventDefault()
            x = 2;
        }
        event.preventDefault()
    }
    function func3(e) {
        if (x === 2) {
            ocean3.classList.remove('show')
            ocean3.classList.add('hide')
            text3.classList.remove('hide')
            text3.classList.add('show')

            event.preventDefault()
        }
        event.preventDefault()
    }


});