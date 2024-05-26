// поиск по классу
let input = document.querySelector('.input');
// поиск по тегу
let btns = document.querySelectorAll('button');

// знаки при которых должна заработать функция
let func_btns = ["%", "/", "*", "-", "+", "="];

// пустая переменная 
let bure = "";
// функция
let calc = (btn_value) => {
    // условия
    if (btn_value === "=" && bure !== "") {
        bure = eval(bure.replace("%", "/100"))
    } else if (btn_value === "ac") {
        bure = ""
    } else if (btn_value === "del") {
        bure = bure.toString().slice(0, bure.length - 1)
    } else {
        if (bure == "" && func_btns.includes(btn_value)) return;
        bure += btn_value
    }
    input.value = bure
};
// функция при котором должнаа работать функция "calc"
btns.forEach((btn) => { btn.addEventListener('click', (a) => calc(a.target.dataset.value)) });