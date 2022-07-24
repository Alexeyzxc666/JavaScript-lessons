const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'current.json') // open - собирает настройки. В скобках: 1 аргумент это метод гет или пост.2 это ссылка куда делаем запрос.Asyn идет в значении true. В конце логин и пароль через них можно так же подключиться.
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Заголовок для передачи json файла
    request.send();

    request.addEventListener('load', ()=>{//- метод лоад отслеживает только статус
        if(request.status === 200){//проверяем на ошибки и состояние.
            console.log(request.status);// здесь нам приходит json(типа наш сервер и его данные в объекте)
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);// метод который убирает все дробные до 2 символов и как хотите.
        }else{
            inputUsd.value = 'чтото то что то чтото не то.'
        }

    // request.addEventListener('readystatechange', ()=>{//readystatechange - старый метод уже не использвуется
    //     if(request.readyState === 4 && request.status === 200){//проверяем на ошибки и состояние.
    //         console.log(request.status);// здесь нам приходит json(типа наш сервер и его данные в объекте)
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);// метод который убирает все дробные до 2 символов и как хотите.
    //     }else{
    //         inputUsd.value = 'чтото то что то чтото не то.'
    //     }

    });//следит за состоянием запроса 

    //status - получаем статус сервера(Accept, Error)
    //statusText - отображается  текстом на странице
    //response - ответ от сервера
    //readyState - текущеке состояние запроса
});