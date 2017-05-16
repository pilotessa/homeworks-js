'use strict';

var TASK_TEXT = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has' +
    'been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley' +
    'of type and scrambled it to make a type specimen book.\n' +
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining' +
    'essentially unchanged.\n' +
    'Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum' +
    'passages, and more recently with desktop publishing software like Aldus PageMaker including' +
    'versions of Lorem Ipsum';

/*
 * 1. Найти все Lorem Ipsum
 */
function task1() {
    var rx = /Lorem Ipsum/g,
        result = TASK_TEXT.match(rx);

    console.log(result);
}

/*
 * 2. Найти первый Lorem Ipsum в тексте
 */
function task2() {
    var rx = /Lorem Ipsum/,
        result = TASK_TEXT.match(rx);

    console.log(result);
}

/*
 * 3. Найти последний Lorem Ipsum в тексте
 */
function task3() {
    var rx = /Lorem Ipsum(?![\s\S]*Lorem Ipsum)/,
        result = TASK_TEXT.match(rx);

    console.log(result);
}

/*
 * 4. Найти все числа в тексте
 */
function task4() {
    var rx = /\d+/g,
        result = TASK_TEXT.match(rx);

    console.log(result);
}

/*
 * 5. Найти все числа, у которых последних 2 символа - нули
 */
function task5() {
    var rx = /\d*[1-9]0{2}/g,
        result = TASK_TEXT.match(rx);

    console.log(result);
}

/*
 * 6. Найти все числа, у которых минимум 2 нуля в конце
 */
function task6() {
    var rx = /\d+0{2}/g,
        result = TASK_TEXT.match(rx);

    console.log(result);
}

/*
 * 7. Найти весь текст, который окружен Lorem Ipsum с двух сторон
 */
function task7() {
    var rx = /(?=Lorem Ipsum)[\s\S]+?(?=Lorem Ipsum)/g,
        result = TASK_TEXT.match(rx);

    console.log(result);
}

/*
 * 8. Найти первых 3 символа в начале каждого параграфа.
 */
function task8() {
    var rx = /^.{3}/gm,
        result = TASK_TEXT.match(rx);

    console.log(result);
}

/*
 * Написать регулярное выражение для валидации телефона в формате +38 (0XX) XXX-XX-XX, где X - некоторое число
 */
function task9() {
    var $input = $('#task9Input'),
        val = $input.val(),
        rx = /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/,
        result = rx.test(val),
        className = result ? 'has-success' : 'has-error';

    $input.parent().removeClass('has-success').removeClass('has-error').addClass(className);

    console.log(result);
}

/*
 * Написать регулярное выражение для валидации email’а
 */
function task10() {
    var $input = $('#task10Input'),
        val = $input.val(),
        rx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
        result = rx.test(val),
        className = result ? 'has-success' : 'has-error';

    $input.parent().removeClass('has-success').removeClass('has-error').addClass(className);

    console.log(result);
}

/*
 * Написать регулярное выражение для валидации пароля, который соответствует требованиям:
 *  - длина минимум 6 символов
 *  - содержит минимум 1 заглавную букву
 *  - содержит минимум 1 прописную букву
 *  - содержит минимум 1 цифру
 */
function task11() {
    var $input = $('#task11Input'),
        val = $input.val(),
        rx = /(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d+).{6,}/,
        result = rx.test(val),
        className = result ? 'has-success' : 'has-error';

    $input.parent().removeClass('has-success').removeClass('has-error').addClass(className);

    console.log(result);
}

// Bind functionality
$(function () {
    $('<code></code>').html(TASK_TEXT).appendTo('pre');

    $('.task-runner').click(function () {
        window[$(this).data('task')]();
        return false;
    });
});