'use strict';

var CSS_COLOR_NAMES = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
var CYRILLIC_SYMBOLS = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";

/*
 * 1. Выведите запрос на ввод логина через prompt.
 * 2. Если будет введено Ваше имя - вывести alter “Вход выполнен”.
 * 3. Если будет введено чужое имя - вывести alter “Неверный пользователь” и вывести в консоль имя пользователя.
 * 4. Если будет пустое значение - вывести alert “Введите имя”.
 */
function task1() {
    var MY_NAME = "Елена";
    var login = prompt("Введите логин", "");

    if (login == MY_NAME) {
        alert("Вход выполнен");
    } else if (login) {
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
        number = +prompt("Введите число", "");
        if (!isNaN(number)) {
            result += number;
        }
    } while (confirm("Следующее число?"));

    alert("Сумма чисел: " + result);
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
    if (Number.isInteger(base) && Number.isInteger(exponent) && exponent >= 0) {
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
    if (Number.isInteger(base) && Number.isInteger(exponent) && exponent >= 0) {
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
 * Напишите функцию power, которая принимает 2 целочисленных аргумента и возвращает возведение первого аргумента в
 * степень второго.
 */
function task5() {
    var base = +prompt("Введите основание", "");
    var exponent = +prompt("Введите показатель", "");

    console.log(power(base, exponent));
}

/*
 * base, exponent - целые числа
 */
function power(base, exponent) {
    if (!Number.isInteger(base) || !Number.isInteger(exponent)) {
        return null;
    }

    if (base === 0) {
        return 0;
    }

    var result = 1,
        exponentAbs = Math.abs(exponent);

    for (var i = 1; i <= exponentAbs; i++) {
        result *= base;
    }

    if (exponent < 0) {
        result = 1 / result;
    }

    return result;
}

/*
 * 1. Создайте пустые объекты book1, book2
 * 2. Добавьте к данным объектам поля title, publishedYear и year с произвольными значениями
 * 3. Выведите свойства каждого из объекта в консоль с помощью цикла.
 */
function task6() {
    function Book() {
        this.title = prompt("Введите заголовок", "");
        this.publishedYear = prompt("Введите год публикации", "");
        this.year = prompt("Введите год", "");

        this.printInfo = function () {
            for (var key in this) {
                if (typeof this[key] !== "function") {
                    console.log(key + ": " + this[key]);
                }
            }
        }
    }

    var book1 = new Book();
    var book2 = new Book();

    console.log("book1");
    book1.printInfo();
    console.log("book2");
    book2.printInfo();
}

/*
 * Исходный код
 * var arr = [5, 12];
 * arr [99] = 7;
 * var result = [];
 * Записать в массив result квадраты значений исходного массива arr
 */
function task7() {
    var arr = [5, 12];
    arr [99] = 7;

    var result = [];
    for (var i in arr) {
        result[i] = Math.pow(arr[i], 2);
    }

    console.log(result);
}

/*
 * Напишите функцию для создания таблицы размером NхM. Такой, чтобы каждая ячейка заполнялась случайной буквой русского
 * алфавита и случайным цветом фона
 */

function task8() {
    var m = +prompt("Введите количество строк", "");
    var n = +prompt("Введите количество столбцов", "");

    if (m && Number.isInteger(m) && n && Number.isInteger(n)) {
        console.log(randTable(m, n));
    } else {
        console.log("Wrong input");
    }
}

function randTable(m, n) {
    var result;

    result = '<table>';
    for (var i = 0; i < m; i++) {
        result += '<tr>';
        for (var j = 0; j < n; j++) {
            result += randCell();
        }
        result += '</tr>';
    }
    result += '</table>';

    return result;
}

function randCell() {
    return '<td style="background-color: ' + randItemFromArray(CSS_COLOR_NAMES) + '">' + randItemFromArray(CYRILLIC_SYMBOLS) + '</td>';
}

function randItemFromArray(arrayItems) {
    var position = Math.floor(Math.random() * (arrayItems.length));
    return arrayItems[position];
}

/*
 * Напишите функцию showGraph(), которая будет принимать неограниченное количество аргументов (целых чисел) и строить
 * разноцветный график.
 */
var POINT_SIZE = 10;
var POINT_SCALE = 10;

function task9() {
    var data = [],
        str,
        number,
        stopDataInput = false;

    do {
        str = prompt("Введите число", "");
        number = str && str.trim() ? +str : NaN;

        if (Number.isInteger(number)) {
            data.push(number);
        } else {
            stopDataInput = true;
        }
    } while (!stopDataInput);

    showGraph.apply(null, data);
}

function showGraph() {
    var result;

    result = '<div>';
    for (var i in arguments) {
        var currentPoint = arguments[i];
        result += '<div style="display: inline-block; width: ' + POINT_SIZE + 'px; height: ' + currentPoint * POINT_SCALE + 'px; background-color: ' + CSS_COLOR_NAMES[currentPoint] + ';"></div>';
    }
    result += '</div>';

    console.log(result);
}

/*
 * Вывести таблицу с цветом фона подобным шахматной доске. Код оформить в виде функции, которая будет принимать три
 * аргумента: fcolor – первый цвет таблицы, scolor – второй цвет ячеек таблицы, contents – массив, содержимое которого
 * может выводиться в таблице.
 */
var CHESS_TABLE_SIZE = 8;

function task10() {
    var fcolor = prompt("Введите цвет 1", "");
    var scolor = prompt("Введите цвет 2", "");
    var word = prompt("Введите слово", "");
    var result;

    if (word) {
        var contents = [];

        for (var i = 0; i < CHESS_TABLE_SIZE; i++) {
            contents[i] = [];
            for (var j = 0; j < CHESS_TABLE_SIZE; j++) {
                contents[i][j] = word;
            }
        }

        result = getChessTable(fcolor, scolor, contents);
    } else {
        result = getChessTable(fcolor, scolor);
    }

    console.log(result);
}

function getChessTable(fcolor, scolor, contents) {
    var result;

    result = '<table>';
    for (var i = 0; i < CHESS_TABLE_SIZE; i++) {
        result += '<tr>';
        for (var j = 0; j < CHESS_TABLE_SIZE; j++) {
            var cellContent = contents && contents[i][j] ? contents[i][j] : '&nbsp;';
            result += '<td style="background-color: ' + ((i + j) % 2 ? scolor : fcolor) + ';">' + cellContent + '</td>';
        }
        result += '</tr>';
    }
    result += '</table>';

    return result;
}

/*
 * Напишите функцию, рассчитывающую размер ипотечного аннуитетного платежа. Функция должна принимать размер кредита в
 * у.е., процентную ставку за период и количество периодов. Для расчета платежа, воспользуйтесь формулой
 * (https://ru.wikipedia.org/wiki/%D0%98%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0)
 */
function task11() {
    var S = +prompt("Введите размер кредита в у.е.", "");
    var p = +prompt("Введите процентную ставку за период", "");
    var n = +prompt("Введите количество периодов", "");

    if (S && !isNaN(S) && p && !isNaN(p) && n && !isNaN(n)) {
        console.log(annuity(S, p, n));
    }
}

/*
 * S — величина (тело) кредита
 * p — величина процентной ставки за период (в долях)
 * n — количество периодов.
 */
function annuity(S, p, n) {
    var result = S * p / (1 - Math.pow((1 + p), -n));

    return result;
}

/*
 * Написать функцию color(), которая будет генерировать случайный цвет в RGB формате. Проверьте работу функции: в цикле
 * выведите 10 контейнеров div с разным фоном цвета.
 */
function task12() {
    var div;

    for (var i = 0; i < 10; i++) {
        div = '<div style="width: 100px; height: 100px; background-color: ' + color() + ';"></div>';
        console.log(div);
    }
}

function color() {
    var c1 = Math.floor(Math.random() * (256));
    var c2 = Math.floor(Math.random() * (256));
    var c3 = Math.floor(Math.random() * (256));
    var color = 'rgb(' + c1 + ', ' + c2 + ', ' + c3 + ')';

    return color;
}

/*
 * Напишите функцию, генерирующую массив с случайным количеством элементов вида «Товар N», где N случайный номер товара.
 * Выведите на экран количество товаров каждого вида.
 */
var ARR_MAX_LENGTH = 100;
var ARR_MAX_N = 10;

function task13() {
    var arr = randArr();
    var result = {};
    var value;

    for (var k in arr) {
        value = arr[k];

        if (value in result) {
            result[value]++;
        } else {
            result[value] = 1;
        }
    }

    console.log(arr);
    for (var k in result) {
        console.log(k, result[k]);
    }
}

function randArr() {
    var length = 1 + Math.floor(Math.random() * ARR_MAX_LENGTH);
    var arr = [];

    for (var i = 0; i < length; i++) {
        arr[i] = "Товар " + (1 + Math.floor(Math.random() * ARR_MAX_N));
    }

    return arr;
}

/*
 * Создайте метод у всех числовых объектов, который бы выводил значение числа от 0 до 99 в виде слов. Например число 45
 * должно выводиться как «сорок пять».
 */
function task14() {
    var number = +prompt("Введите число", "");
    console.log(toCyrillicString(number));
}

function toCyrillicString(number) {
    var CYRILLIC_NUMBERS = {
        0: "ноль",
        1: "один",
        2: "два",
        3: "три",
        4: "четыре",
        5: "пять",
        6: "шесть",
        7: "семь",
        8: "восемь",
        9: "девять",
        10: "десять",
        11: "одиннадцать",
        12: "двенадцать",
        13: "тринадцать",
        14: "четырнадцать",
        15: "пятнадцать",
        16: "шестнадцать",
        17: "семнадцать",
        18: "восемнадцать",
        19: "девятнадцать",
        20: "двадцать",
        30: "тридцать",
        40: "сорок",
        50: "пятьдесят",
        60: "шестьдесят",
        70: "семьдесят",
        80: "восемьдесят",
        90: "девяносто"
    };
    var result;

    if (!Number.isInteger(number) || number < 0 || number >= 100) {
        return null;
    }

    if (CYRILLIC_NUMBERS[number] !== undefined) {
        result = CYRILLIC_NUMBERS[number];
    } else {
        var units = number % 10,
            tens = number - units;
        if (CYRILLIC_NUMBERS[tens] !== undefined && CYRILLIC_NUMBERS[units] !== undefined) {
            result = CYRILLIC_NUMBERS[tens] + " " + CYRILLIC_NUMBERS[units];
        }
    }

    return result;
}

/*
 * Напишите функцию showOpacity(), которая бы принимала на вход обычную строку, а возвращала строку, в котором
 * прозрачность букв менялась от 0 до 1.
 */
function task15() {
    var str = prompt("Введите строку", "");

    if (str) {
        console.log(showOpacity(str));
    }
}

function showOpacity(str) {
    var opacity;
    var result = '';

    for (var i = 0; i < str.length; i++) {
        opacity = Math.floor(Math.random() * 11) / 10;
        result += '<span style="opacity: ' + opacity + '">' + str.charAt(i) + '</span>';
    }

    return result;
}

// Bind functionality
$(function () {
    $('.task-runner').click(function () {
        window[$(this).data('task')]();
        return false;
    });
});