'use strict';

/*
 * 1. Выведите запрос на ввод логина через prompt.
 * 2. Если будет введено Ваше имя - вывести alter “Вход выполнен”.
 * 3. Если будет введено чужое имя - вывести alter “Неверный пользователь” и вывести в консоль имя пользователя.
 * 4. Если будет пустое значение - вывести alert “Введите имя”.
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
 * 1. Поочередно выведите запрос на ввод числа через prompt.
 * 2. Вывести сумму чисел пользователя через alert.
 */
function task2() {
    var number = 0;
    var result = 0;

    do {
        number = +prompt("Введите число");
        if (!isNaN(number)) {
            result += number;
        }
    } while (Boolean(number));

    alert(result);
}

/*
 * Напишите программу, которая возводит число 2 в степень 8 используя цикл while
 */
function task3() {
    console.log(powerWhile(2, 8));
}

/*
 * base - целое число
 * exponent - целое неотрицательное число
 */
function powerWhile(base, exponent) {
    if (typeof base === 'number' && base % 1 === 0 && typeof exponent === 'number' && exponent % 1 === 0 && exponent >= 0) {
        var result = 1;
        var i = 0;

        while (i < exponent) {
            result *= base;
            i++;
        }
    } else {
        result = null;
    }

    return result;
}

/*
 * Напишите программу, которая возводит число 2 в степень 8 используя цикл for
 */
function task4() {
    console.log(powerFor(2, 8));
}

/*
 * base - целое число
 * exponent - целое неотрицательное число
 */
function powerFor(base, exponent) {
    if (typeof base === 'number' && base % 1 === 0 && typeof exponent === 'number' && exponent % 1 === 0 && exponent >= 0) {
        var result = 1;

        for (var i = 1; i <= exponent; i++) {
            result *= base;
        }
    } else {
        result = null;
    }

    return result;
}

/*
 * Напишите функцию power, которая принимает 2 целочисленных аргумента и возвращает возведение первого аргумента в степень второго.
 */
function task5() {
    var base = +prompt("Введите основание");
    var exponent = +prompt("Введите показатель");

    console.log(power(base, exponent));
}

/*
 * base, exponent - целые числа
 */
function power(base, exponent) {
    if (typeof base === 'number' && base % 1 === 0 && typeof exponent === 'number' && exponent % 1 === 0) {
        var result;

        if (base) {
            if (exponent >= 0) {
                result = 1;
                for (var i = 1; i <= exponent; i++) {
                    result *= base;
                }
            } else {
                result = 1;
                for (var i = 1; i <= -exponent; i++) {
                    result *= base;
                }
                result = 1 / result;
            }
        } else {
            result = 0;
        }
    } else {
        result = null;
    }

    return result;
}

/*
 * 1. Создайте пустые объекты book1, book2
 * 2. Добавьте к данным объектам поля title, publishedYear и year с произвольными значениями
 * 3. Выведите свойства каждого из объекта в консоль с помощью цикла.
 */
function task6() {
    var book1 = {};
    var book2 = {};

    book1.title = prompt("Введите заголовок", "");
    book1.publishedYear = prompt("Введите год публикации", "");
    book1.year = prompt("Введите год", "");
    book2.title = prompt("Введите заголовок", "");
    book2.publishedYear = prompt("Введите год публикации", "");
    book2.year = prompt("Введите год", "");

    console.log("book1");
    for (var key in book1) {
        console.log(key + ": " + book1[key]);
    }
    console.log("book2");
    for (var key in book2) {
        console.log(key + ": " + book2[key]);
    }
}

// Bind functionality
$(function () {
    $(".task-runner").click(function () {
        window[$(this).data('task')]();
        return false;
    });
});