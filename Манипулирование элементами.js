document.addEventListener('DOMContentLoaded', function() {

    // ------------------------------- Новые задачи 1–4

    // Задача 1
    let task1ListBefore = document.querySelector('#task1-list-before');
    let task1ListAfter = document.querySelector('#task1-list-after');
    let initialLi = document.createElement('li'); initialLi.textContent = 'Изначально пустой'; task1ListBefore.appendChild(initialLi);
    let liItem1 = document.createElement('li'); liItem1.textContent = 'item'; task1ListAfter.appendChild(liItem1);

    // Задача 2
    let task2List = document.querySelector('#task2-list');
    let task2AddButton = document.querySelector('#task2-add-btn');
    task2AddButton.addEventListener('click', function() {
        let li = document.createElement('li');
        li.textContent = 'item ' + (task2List.children.length + 1);
        li.addEventListener('click', function() {
            this.textContent += '!';
        });
        task2List.appendChild(li);
    });

    // Задача 3
    let task3List = document.querySelector('#task3-list');
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement('li'); li.textContent = i; task3List.appendChild(li);
    }

    // Задача 4
    let task4Parent = document.querySelector('#task4-parent');
    let task4Paragraph = document.querySelector('#task4-paragraph');
    for (let i = 1; i <= 5; i++) {
        let input = document.createElement('input'); input.type = 'text'; input.placeholder = 'Введите текст ' + i;
        input.addEventListener('blur', function() { task4Paragraph.textContent = this.value; });
        task4Parent.appendChild(input);
    }

    // ------------------------------- Старые задачи

    // Удаление li по клику
    document.querySelectorAll('#list li').forEach(li => li.addEventListener('click', () => li.remove()));

    // Удаление последнего li по кнопке
    let parentList = document.querySelector('#parent');
    document.querySelector('#button').addEventListener('click', () => {
        let lastLi = parentList.lastElementChild; if (lastLi) lastLi.remove();
    });

    // Вставка в начало и конец #elem
    let elemUl = document.querySelector('#elem');
    let liStart = document.createElement('li'); liStart.textContent = 'start'; elemUl.prepend(liStart);
    let liEnd = document.createElement('li'); liEnd.textContent = 'finish'; elemUl.append(liEnd);

    // Вставка нового li перед #elem1 с "!"
    let parentUl1 = document.querySelector('#parent1');
    let elem1Li = document.querySelector('#elem1');
    let newLi = document.createElement('li'); newLi.textContent = 'new';
    newLi.addEventListener('click', function() { this.textContent += '!'; });
    parentUl1.insertBefore(newLi, elem1Li);

    // Смежная вставка элементов с insertAdjacentElement
    let boxDiv = document.querySelector('#elem-div');
    ['beforebegin','afterend','afterbegin','beforeend'].forEach(pos => {
        let p = document.createElement('p'); p.textContent = '!!!'; boxDiv.insertAdjacentElement(pos,p);
    });

    // Смежная вставка HTML
    boxDiv.insertAdjacentHTML('beforebegin', `<div class="www"><p>text</p><p>text</p><input></div>`);

    // Клонирование инпута
    let originalInput = document.querySelector('#inputClone');
    let cloneBtn = document.querySelector('#cloneButton');
    let inputContainer = document.querySelector('#inputContainer');
    cloneBtn.addEventListener('click', () => inputContainer.appendChild(originalInput.cloneNode(true)));

    // Создание абзацев из массива с увеличением по клику
    let parentArray = document.querySelector('#parentArray');
    [1,2,3,4,5].forEach(num => {
        let p = document.createElement('p'); p.textContent = num;
        p.addEventListener('click', () => p.textContent = Number(p.textContent)+1);
        parentArray.appendChild(p);
    });

    // Создание списка ul из массива с кликом и '!' один раз
    let arrayUl = ['яблоко','банан','вишня','груша','слива'];
    let ulElem = document.querySelector('#listFromArray');
    arrayUl.forEach(item => {
        let li = document.createElement('li'); li.
        textContent = item;
        li.addEventListener('click', function() {
            if(!this.dataset.clicked){ this.textContent += '!'; this.dataset.clicked = 'true'; }
        });
        ulElem.appendChild(li);
    });

});