let select1 = document.querySelector('#select1');
let paragraph1 = document.querySelector('#paragraph1');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
    paragraph1.textContent = select1.value;
});


let select2 = document.querySelector('#select2');
let paragraph2 = document.querySelector('#paragraph2');
select2.addEventListener('change', function() {
    let year = parseInt(this.value);
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    paragraph2.textContent = isLeap ? 'Високосный год' : 'Не високосный год';
});


let select3 = document.querySelector('#select3');
let paragraph3 = document.querySelector('#paragraph3');
select3.addEventListener('change', function() {
    let dayNumber = parseInt(this.value);
    let isWeekend = dayNumber === 6 || dayNumber === 7;
    paragraph3.textContent = isWeekend ? 'Выходной день' : 'Рабочий день';
});


let select4 = document.querySelector('#select4');
let currentMonth = new Date().getMonth() + 1;
select4.value = currentMonth.toString();


let input1 = document.querySelector('#input1');
let select5 = document.querySelector('#select5');
input1.addEventListener('blur', function() {
    let index = parseInt(this.value);
    select5.selectedIndex = index;
});


let select6 = document.querySelector('#select6');
let currentDay = new Date().getDay();
select6.selectedIndex = currentDay;


let select7 = document.querySelector('#select7');
for (let option of select7) {
    option.textContent += ' [' + option.value + ']';
}


let select8 = document.querySelector('#select8');
for (let option of select8) {
    if (option.selected) {
        option.textContent += '!';
    } else {
        option.textContent += '?';
    }
}


let select9 = document.querySelector('#select9');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
    let lastOption = select9[select9.length - 1];
    lastOption.selected = true;
});


let select10 = document.querySelector('#select10');
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
    let selectedOption = select10[select10.selectedIndex];
    console.log(selectedOption.textContent);
});


let select11 = document.querySelector('#select11');
let button4 = document.querySelector('#button4');
button4.addEventListener('click', function() {
    let selectedOption = select11[select11.selectedIndex];
    selectedOption.textContent += '!';
});

let ul = document.querySelector('#elem');

// элемент в начало
let start = document.createElement('li');
start.textContent = 'start';
ul.prepend(start);

// элемент в конец
let finish = document.createElement('li');
finish.textContent = 'finish';
ul.append(finish);
