(function () {
    const screen = document.querySelector('.input-display');
    const btn = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-equal');
    // const button= document.getElementsByTagName('button')



    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            if (value) {
                screen.value += value;
            }
        })
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value= answer;
        }
    })

    clear.addEventListener('click', function (e) {
        screen.value="";
    })

})();


