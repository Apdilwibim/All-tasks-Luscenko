
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    document.querySelector('.out-1').textContent += event.key;
    return event.key;
}

document.querySelector('.i-1').addEventListener('keypress', t1);

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2() {
    document.querySelector('.out-2').textContent = event.keyCode;
    return event.keyCode;
}

document.querySelector('.i-2').addEventListener('keypress', t2);


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
    console.log(event);
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        document.querySelector('.out-3').textContent = 'false';
    }
    if (event.keyCode >= 97 && event.keyCode <= 122) {
        document.querySelector('.out-3').textContent = 'true';
    }
}

document.querySelector('.i-3').addEventListener('keypress', t3);


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
    let str = '';
    str = (event.key).toLowerCase();
    document.querySelector('.out-4').textContent += str;
}

document.querySelector('.i-4').addEventListener('keypress', t4);

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    let str = '';
    str = (event.key).toUpperCase();
    document.querySelector('.out-5').textContent += str;
}

document.querySelector('.i-5').addEventListener('keypress', t5);

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

let out = '';

function t6(event) {
    console.log(event.keyCode);
    if (event.keyCode >= 97) {
        out += event.key;
    }
    document.querySelector('.i-6').value = out;
    return false;
}

document.querySelector('.i-6').addEventListener('keypress', t6);


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = ['f', 'b', 'w', 'g', 'x', 'v', 's', 'a', 'q'];
    let i = Math.floor(Math.random() * a7.length);
    document.querySelector('.out-7').textContent = a7[i];
}

document.querySelector('.i-7').addEventListener('keypress', t7);

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
    let out = '';
    if (event.key == 'i') {
        out += 1;
    } else if (event.key == 'o') {
        out += 0;
    } else if (event.key == 'l') {
        out += 7;
    } else {
        out += event.key;
    }
    document.querySelector('.out-8').textContent += out;
}

document.querySelector('.i-8').addEventListener('keypress', t8);


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let i = 0;

function t9(event) {
    if (event.key == 'ArrowDown') {
        i += 1;
    }
    document.querySelector('.out-9').textContent = i;
}

document.querySelector('.i-9').addEventListener('keyup', t9);


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let png1 = document.querySelector('.block>img');

function t10(event) {
    if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
        png1.style.height = `${png1.offsetHeight + 1}px`;
    } else if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        png1.style.width = `${png1.offsetWidth + 1}px`;
    }
}

document.querySelector('.i-10').addEventListener('keyup', t10);

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

let symbols = document.querySelectorAll('.symbol');
let numbers = document.querySelectorAll('.number');
let enter = document.querySelector('.enter');
let shift = document.querySelector('.shift');
let space = document.querySelector('.space');
let capslock = document.querySelector('.capslock');

function t11(event) {
    for (let number of numbers) {
        number.classList.remove('active');
        if (event.key == (number.getAttribute('data'))) {
            number.classList.add('active');
        }
    }

    for (let symbol of symbols) {
        symbol.classList.remove('active');
        if (event.key.toUpperCase() == (symbol.getAttribute('data'))) {
            symbol.classList.add('active');
        }
    }

    enter.classList.remove('active');
    if (event.key == 'Enter') {
        enter.classList.add('active');
    }

    shift.classList.remove('active');
    if (event.key == 'Shift') {
        shift.classList.add('active');
    }

    space.classList.remove('active');
    if (event.key == ' ') {
        space.classList.add('active');
    }

    capslock.classList.remove('active');
    if (event.key == 'CapsLock') {
        capslock.classList.add('active');
    }
}

document.querySelector('.i-11').addEventListener('keydown', t11);

