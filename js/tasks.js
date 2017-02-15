'use strict';

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
        number = +prompt("Введите число", "");
        if (!isNaN(number)) {
            result += number;
        }
    } while (number);

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

    if (m && m % 1 === 0 && n && n % 1 === 0) {
        console.log(randTable(m, n));
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
    return '<td style="background-color: ' + randColor() + '">' + randLetter() + '</td>';
}

function randColor() {
    var CSS_COLOR_NAMES = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
    var position = Math.floor(Math.random() * (CSS_COLOR_NAMES.length));

    return CSS_COLOR_NAMES[position];
}

function randLetter() {
    var CYRILLIC_SYMBOLS = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    var position = Math.floor(Math.random() * (CYRILLIC_SYMBOLS.length));

    return CYRILLIC_SYMBOLS.charAt(position);
}

/*
 * Напишите функцию showGraph(), которая будет принимать неограниченное количество аргументов (целых чисел) и строить
 * разноцветный график.
 */
function task9() {
    var data = [];
    var str;
    var number;

    do {
        str = prompt("Введите число", "");

        if (str === null || str === '' || isNaN(number = +str) || number % 1 !== 0) {
            break;
        }

        data.push(number);
    } while (true);

    showGraph.apply(null, data);
}

function showGraph() {
    var CSS_COLOR_NAMES = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];
    var POINT_SIZE = 10;
    var POINT_SCALE = 10;
    var result;

    result = '<div>';
    for (var i in arguments) {
        result += '<div style="display: inline-block; width: ' + POINT_SIZE + 'px; height: ' + arguments[i] * POINT_SCALE + 'px; background-color: ' + CSS_COLOR_NAMES[arguments[i]] + ';"></div>';
    }
    result += '</div>';

    console.log(result);
}

/*
 * Вывести таблицу с цветом фона подобным шахматной доске. Код оформить в виде функции, которая будет принимать три
 * аргумента: fcolor – первый цвет таблицы, scolor – второй цвет ячеек таблицы, contents – массив, содержимое которого
 * может выводиться в таблице.
 */
function task10() {
    var fcolor = prompt("Введите цвет 1", "");
    var scolor = prompt("Введите цвет 2", "");
    var word = prompt("Введите слово", "");
    var result;

    if (word === null || word === '') {
        result = getChessTable(fcolor, scolor);
    } else {
        var contents = [];

        for (var i = 0; i < CHESS_TABLE_SIZE; i++) {
            contents[i] = [];
            for (var j = 0; j < CHESS_TABLE_SIZE; j++) {
                contents[i][j] = word;
            }
        }

        result = getChessTable(fcolor, scolor, contents);
    }

    console.log(result);
}

var CHESS_TABLE_SIZE = 8;

function getChessTable(fcolor, scolor, contents) {
    var result;

    result = '<table>';
    for (var i = 0; i < CHESS_TABLE_SIZE; i++) {
        result += '<tr>';
        for (var j = 0; j < CHESS_TABLE_SIZE; j++) {
            result += '<td style="background-color: ' + ((i + j ) % 2 ? scolor : fcolor) + ';">';
            if (typeof contents !== "undefined" && typeof contents[i][j] !== "undefined") {
                result += contents[i][j];
            } else {
                result += '&nbsp;';
            }
            result += '</td>';
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
    var ARR_MAX_LENGTH = 100;
    var ARR_MAX_N = 10;
    var length = 1 + Math.floor(Math.random() * ARR_MAX_LENGTH);
    var N;
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

    if (!isNaN(number) && number % 1 === 0 && number >= 0 && number <= 99) {
        console.log(number.toCyrillicString());
    }
}

Number.prototype.toCyrillicString = function () {
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

    if (typeof CYRILLIC_NUMBERS[this] !== "undefined") {
        result = CYRILLIC_NUMBERS[this];
    } else {
        var n1;
        var n2;
        n1 = this - (n2 = this % 10);
        if (typeof CYRILLIC_NUMBERS[n1] !== "undefined" && typeof CYRILLIC_NUMBERS[n2] !== "undefined") {
            result = CYRILLIC_NUMBERS[n1] + " " + CYRILLIC_NUMBERS[n2];
        }
    }

    return result;
};

/*
 * Напишите функцию showOpacity(), которая бы принимала на вход обычную строку, а возвращала строку, в котором
 * прозрачность букв менялась от 0 до 1.
 */
function task15() {
    var str = prompt("Введите строку", "");

    if (str !== null && str !== '') {
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
    $(".task-runner").click(function () {
        window[$(this).data('task')]();
        return false;
    });
});