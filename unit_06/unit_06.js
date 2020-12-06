//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

let out1 = document.querySelector('.out-1');

function t1() {
    let result = '';
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            result += '*';
        }
        result += '_';
    }
    out1.innerHTML = result;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

let out2 = document.querySelector('.out-2');

function t2() {
    let result = '';
    for (let i = 1; i < 4; i++) {
        result += `${i}<br>`;
        for (let k = 0; k < 1; k++) {
            result += '*_*_*_<br>';
        }
    }
    out2.innerHTML = result;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>

let out3 = document.querySelector('.out-3');

function t3() {
    let result = '';
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) {
            result += '*_';
        }
        result += '<br>';
    }
    out3.innerHTML = result;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>

let out4 = document.querySelector('.out-4');

function t4() {
    let result = '';
    for (let i = 1; i < 4; i++) {
        result += `${i}_`;
        for (let k = 1; k < 6; k++) {
            result += `${k} `;
        }

    }
    out4.innerHTML = result;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>


let out5 = document.querySelector('.out-5');

function t5() {
    let result = '';
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (k % 2 == 0) {
                result += 1;
            } else {
                result += 0;
            }
        }
        result += '<br>';
    }
    out5.innerHTML = result;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>

let out6 = document.querySelector('.out-6');

function t6() {
    let result = '';
    let counter = 1;
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 6; k++) {
            if (counter % 3 == 0) {
                result += 'x';
            } else if (k % 2 == 0) {
                result += 1;
            } else {
                result += 0;
            }
            counter++;
        }
        result += '<br>';
    }
    out6.innerHTML = result;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>

let out7 = document.querySelector('.out-7');

function t7() {
    let result = '';
    for (let i = 1; i < 5; i++) {
        for (let k = 0; k < i; k++) {
            result += '*';
        }
        result += '<br>';
    }
    out7.innerHTML = result;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. 
// </p>

let out8 = document.querySelector('.out-8');

function t8() {
    let result = '';
    for (let i = 5; i > 0; i--) {
        for (let k = 0; k < i; k++) {
            result += '*';
        }
        result += '<br>';
    }
    out8.innerHTML = result;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>

let out9 = document.querySelector('.out-9');

function t9() {
    let result = '';
    for (let i = 2; i < 7; i++) {
        for (let k = 1; k < i; k++) {
            result += `${k} `;
        }
        result += '<br>';
    }
    out9.innerHTML = result;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>

let out10 = document.querySelector('.out-10');

function t10() {
    let result = '';
    for (let i = 0; i < 5; i++) {
        for (let k = 1; k < 10; k++) {
            if (i == 0 && k < 10) {
                result += `0${k} `;
            } else {
                result += `${i}${k} `;
            }
        }
        result += `${i + 1}0<br>`;
    }
    out10.innerHTML = result;
}

document.querySelector('.b-10').onclick = t10;