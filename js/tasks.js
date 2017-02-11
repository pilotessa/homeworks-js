'use strict';

/*
 1. Выведите запрос на ввод логина через prompt.
 2. Если будет введено Ваше имя - вывести alter “Вход выполнен”.
 3. Если будет введено чужое имя - вывести alter “Неверный пользователь” и вывести в консоль имя пользователя.
 4. Если будет пустое значение - вывести alert “Введите имя”.
 */
function task1() {
    var MY_NAME = "Елена";
    var login = prompt("Введите логин");
    if (login == MY_NAME) {
        alert("Вход выполнен");
    } else if (Boolean(login)) {
        alert("Неверный пользователь");
        console.log(login);
    } else {
        alert("Введите имя");
    }
}

/*
 1. Поочередно выведите запрос на ввод числа через prompt.
 2. Вывести сумму чисел пользователя через alert.
 */
function task2() {
    var number = 0;
    var result = 0;
    do {
        number = +prompt("Число");
        if (!isNaN(number)) {
            result += number;
        }
    } while (Boolean(number));
    alert(result);
}

// Bind functionality
$(function () {
    $(".task-runner").click(function () {
        window[$(this).data('task')]();
        return false;
    });
});