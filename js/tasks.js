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

/*
 * Напишите функцию для создания таблицы размером NхM. Такой, чтобы каждая ячейка заполнялась случайной буквой русского
 * алфавита и случайным цветом фона
 */
function task7() {
    var m = +prompt("Введите количество строк");
    var n = +prompt("Введите количество столбцов");

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
function task8() {
    var data = [];
    var str;
    var number;

    do {
        str = prompt("Введите число");

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
var CHESS_TABLE_SIZE = 8;

function task9() {
    var fcolor = prompt("Введите цвет 1");
    var scolor = prompt("Введите цвет 2");
    var word = prompt("Введите слово");
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

// Bind functionality
$(function () {
    $(".task-runner").click(function () {
        window[$(this).data('task')]();
        return false;
    });
});