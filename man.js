// Задание 1
let elem1 = document.querySelector('#elem1');
let li1 = document.createElement('li');
li1.textContent = 'item';
elem1.appendChild(li1);

// Задание 2
let elem2 = document.querySelector('#elem2');
let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = 'item';
    elem2.appendChild(li);
});

// Задание 3
let elem3 = document.querySelector('#elem3');
let button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = 'item';
    li.addEventListener('click', function() {
        this.textContent += '!';
    });
    elem3.appendChild(li);
});

// Задание 4
let elem4 = document.querySelector('#elem4');
for (let i = 1; i <= 10; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    elem4.appendChild(li);
}

// Задание 5
let parent1 = document.querySelector('#parent1');
let output1 = document.querySelector('#output1');
for (let i = 1; i <= 5; i++) {
    let input = document.createElement('input');
    input.addEventListener('blur', function() {
        output1.textContent = this.value;
    });
    parent1.appendChild(input);
}

// Задание 6
let list1 = document.querySelectorAll('#list1 li');
for (let li of list1) {
    li.addEventListener('click', function() {
        this.remove();
    });
}

// Задание 7
let parent2 = document.querySelector('#parent2');
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
    let lastChild = parent2.lastElementChild;
    if (lastChild) {
        lastChild.remove();
    }
});

// Задание 8
let elem5 = document.querySelector('#elem5');
let startLi = document.createElement('li');
startLi.textContent = 'start';
elem5.prepend(startLi);
let finishLi = document.createElement('li');
finishLi.textContent = 'finish';
elem5.append(finishLi);

// Задание 9
let parent3 = document.querySelector('#parent3');
let elem6 = document.querySelector('#elem6');
let newLi = document.createElement('li');
newLi.textContent = 'new';
parent3.insertBefore(newLi, elem6);

// Задание 10
let parent4 = document.querySelector('#parent4');
let elem7 = document.querySelector('#elem7');
let newLi = document.createElement('li');
newLi.textContent = 'new';
parent4.insertBefore(newLi, elem7);
newLi.addEventListener('click', function() {
    this.textContent += '!';
});

// Задание 11
let elem8 = document.querySelector('#elem8');
    let p2 = document.createElement('p');
    p2.textContent = '!!!';
    elem8.insertAdjacentElement('beforeBegin', p2);

// Задание 12
let elem9 = document.querySelector('#elem9');
let p3 = document.createElement('p');
p3.textContent = '!!!';
elem9.insertAdjacentElement('afterEnd', p3);

// Задание 13
let elem10 = document.querySelector('#elem10');
let p4 = document.createElement('p');
p4.textContent = '!!!';
elem10.insertAdjacentElement('afterBegin', p4);

// Задание 14
let elem11 = document.querySelector('#elem11');
let p5 = document.createElement('p');
p5.textContent = '!!!';
elem11.insertAdjacentElement('beforeEnd', p5);

// Задание 15
let elem12 = document.querySelector('#elem12');
let htmlString = '<div class="www"><p>text</p><p>text</p><input></div>';
elem12.insertAdjacentHTML('beforeBegin', htmlString);

// Задание 16
let input1 = document.querySelector('#input1');
let button4 = document.querySelector('#button4');
button4.addEventListener('click', function() {
    let clone = input1.cloneNode(true);
    document.body.appendChild(clone);
});

// Задание 17
let elem13 = document.querySelector('#elem13');
let hasClass = elem13.matches('.www');
console.log(hasClass);

// Задание 18
let elem14 = document.querySelector('#elem14');
let isParagraph = elem14.matches('p');
console.log(isParagraph);

// Задание 19
let elem15 = document.querySelector('#elem15');
let elem16 = document.querySelector('#elem16');
let contains = elem15.contains(elem16);
console.log(contains);
