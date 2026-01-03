function setText(selector, text) {
    let elem = document.querySelector(selector);
    elem.textContent = text;
}

setText('#elem1', 'text1');
setText('#elem2', 'text2');


function setAttr(selector, attr, value) {
    let elem = document.querySelector(selector);
    elem.setAttribute(attr, value);
}

setAttr('#elem1', 'class', 'test-class');


function appendText(selector, text) {
    let elems = document.querySelectorAll(selector);
    for (let elem of elems) {
        elem.textContent += text;
    }
}

appendText('.elem3', ' appended');


function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);
    for (let elem of elems) {
        func(elem);
    }
}

forEach('.elem4', function(elem) {
    elem.textContent += '!';
});


function forEachWithIndex(selector, func) {
    let elems = document.querySelectorAll(selector);
    for (let i = 0; i < elems.length; i++) {
        func(elems[i], i);
    }
}

forEachWithIndex('.elem5', function(elem, index) {
    elem.textContent = index + ': ' + elem.textContent;
});


function appendTextToElem(elem, text) {
    elem.textContent += text;
}

let elem6 = document.querySelectorAll('.elem6');
for (let elem of elem6) {
    appendTextToElem(elem, '!');
}


function setValue(input, text) {
    input.value = text;
}

let input1 = document.querySelector('#input1');
setValue(input1, 'default value');


function appendTextToElems(elems, text) {
    for (let elem of elems) {
        elem.textContent += text;
    }
}

let elems6 = document.querySelectorAll('.elem6');
appendTextToElems(elems6, '!!!');


function appendElem(ul, text) {
    let li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

let list1 = document.querySelector('#list1');
appendElem(list1, 'first item');
appendElem(list1, 'second item');


let arr = ['item1', 'item2', 'item3'];
for (let item of arr) {
    appendElem(list1, item);
}


function createTable(rows, cols, parent) {
    let table = document.createElement('table');
    
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.textContent = `${i+1}-${j+1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
    parent.appendChild(table);
}

let elem7 = document.querySelector('#elem7');
createTable(3, 4, elem7);


function createTableReturn(rows, cols) {
    let table = document.createElement('table');
    
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.textContent = `${i+1}-${j+1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
    return table;
}

let elem8 = document.querySelector('#elem8');
let table = createTableReturn(2, 3);
elem8.appendChild(table);


function createTableByArr(arr) {
    let table = document.createElement('table');
    
    for (let subArr of arr) {
        let tr = document.createElement('tr');
        for (let elem of subArr) {
            let td = document.createElement('td');
            td.textContent = elem;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
    return table;
}

let elem9 = document.querySelector('#elem9');
let arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let table2 = createTableByArr(arr2);
elem9.appendChild(table2);
