let parent1 = document.querySelector('#parent1');
let arr1 = [1, 2, 3, 4, 5];

for (let elem of arr1) {
    let p = document.createElement('p');
    p.textContent = elem;
    p.addEventListener('click', function() {
        this.textContent = Number(this.textContent) + 1;
    });
    parent1.appendChild(p);
}


let elem1 = document.querySelector('#elem1');
let arr2 = [1, 2, 3, 4, 5];

for (let item of arr2) {
    let li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', function() {
        console.log(this.textContent);
    });
    elem1.appendChild(li);
}


let elem2 = document.querySelector('#elem2');
let arr3 = [1, 2, 3, 4, 5];

for (let item of arr3) {
    let li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', function() {
        this.textContent += '!';
    });
    elem2.appendChild(li);
}


let table1 = document.querySelector('#table1');

for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table1.appendChild(tr);
}


let table2 = document.querySelector('#table2');

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table2.appendChild(tr);
}


let table3 = document.querySelector('#table3');

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.textContent = 'x';
        tr.appendChild(td);
    }
    table3.appendChild(tr);
}


let generateBtn = document.querySelector('#generate');
let tableContainer = document.querySelector('#tableContainer');
generateBtn.addEventListener('click', function() {
    let rows = Number(document.querySelector('#rows').value);
    let cols = Number(document.querySelector('#cols').value);
    
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.textContent = 'cell';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
});


let table4 = document.querySelector('#table4');
let k1 = 1;
for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.textContent = k1;
        k1++;
        tr.appendChild(td);
    }
    table4.appendChild(tr);
}


let table5 = document.querySelector('#table5');
let k2 = 2;
for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.textContent = k2;
        k2 += 2;
        if (k2 > 50) break;
        tr.appendChild(td);
    }
    table5.appendChild(tr);
}


let arr4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table6 = document.querySelector('#table6');

for (let subArr of arr4) {
    let tr = document.createElement('tr');
    for (let elem of subArr) {
        let td = document.createElement('td');
        td.textContent = elem;
        tr.appendChild(td);
    }
    table6.appendChild(tr);
}


let arr5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table7 = document.querySelector('#table7');

for (let subArr of arr5) {
    let tr = document.createElement('tr');
    for (let elem of subArr) {
        let td = document.createElement('td');
        td.textContent = elem * elem;
        tr.appendChild(td);
    }
    table7.appendChild(tr);
}


let employees1 = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];
let table8 = document.querySelector('#table8');

for (let employee of employees1) {
    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');
    td1.textContent = employee.name;
    tr.appendChild(td1);
    
    let td2 = document.createElement('td');
    td2.textContent = employee.age;
    td2.addEventListener('click', function() {
        this.textContent = Number(this.textContent) + 1;
    });
    tr.appendChild(td2);
    
    let td3 = document.createElement('td');
    td3.textContent = employee.salary;
    td3.addEventListener('click', function() {
        this.textContent = Math.round(Number(this.textContent) * 1.1);
    });
    tr.appendChild(td3);
    
    table8.appendChild(tr);
}


let elem3 = document.querySelector('#elem3');
let input1 = document.querySelector('#input1');
input1.value = elem3.textContent;
input1.addEventListener('input', function() {
    elem3.textContent = this.value;
});


let elem4 = document.querySelector('#elem4');
elem4.addEventListener('click', function() {
    let input = document.createElement('input');
    input.value = elem4.textContent;
    
    input.addEventListener('blur', function() {
        elem4.textContent = this.value;
        this.remove();
    });
    
    elem4.parentElement.appendChild(input);
});


let parent4 = document.querySelector('#parent4');
let paragraphs = parent4.querySelectorAll('p');

for (let p of paragraphs) {
    p.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = this.textContent;
        
        this.textContent = '';
        this.appendChild(input);
        
        input.addEventListener('blur', function() {
            p.textContent = this.value;
            p.addEventListener('click', func);
        });
        
        p.removeEventListener('click', func);
    });
}


let elem5 = document.querySelector('#elem5');
let button1 = document.querySelector('#button1');
let items = elem5.querySelectorAll('li');

for (let item of items) {
    item.addEventListener('click', function() {
        this.remove();
    });
}

button1.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = Number(elem5.lastElementChild.textContent) + 1;
    li.addEventListener('click', function() {
        this.remove();
    });
    elem5.appendChild(li);
});


let elem6 = document.querySelector('#elem6');
let remove1 = document.querySelector('#remove1');
remove1.addEventListener('click', function(event) {
    elem6.remove();
    event.preventDefault();
});


let parent6 = document.querySelector('#parent6');
let paragraphs2 = parent6.querySelectorAll('p');

for (let p of paragraphs2) {
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = ' remove';
    p.appendChild(remove);
    
    remove.addEventListener('click', function(event) {
        p.remove();
        event.preventDefault();
    });
}


let elem7 = document.querySelector('#elem7');
let items2 = elem7.querySelectorAll('li');

for (let item of items2) {
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = ' remove';
    item.appendChild(remove);
    
    remove.addEventListener('click', function(event) {
        item.remove();
        event.preventDefault();
    });
}


let table9 = document.querySelector('#table9');
for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td');
        td.textContent = 'cell';
        tr.appendChild(td);
    }
    
    let removeTd = document.createElement('td');
    let removeLink = document.createElement('a');
    removeLink.href = '';
    removeLink.textContent = 'remove';
    removeTd.appendChild(removeLink);
    tr.appendChild(removeTd);
    
    removeLink.addEventListener('click', function(event) {
        tr.remove();
        event.preventDefault();
    });
    
    table9.appendChild(tr);
}


let parent7 = document.querySelector('#parent7');
let paragraphs3 = parent7.querySelectorAll('p');

for (let p of paragraphs3) {
    let span = document.createElement('span');
    span.textContent = p.textContent;
    p.textContent = '';
    p.appendChild(span);
    
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = ' remove';
    p.appendChild(remove);
    
    span.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = span.textContent;
        
        span.textContent = '';
        span.appendChild(input);
        
        input.addEventListener('blur', function() {
            span.textContent = this.value;
            span.addEventListener('click', func);
        });
        
        span.removeEventListener('click', func);
    });
    
    remove.addEventListener('click', function(event) {
        p.remove();
        event.preventDefault();
    });
}


let parent8 = document.querySelector('#parent8');
let paragraphs4 = parent8.querySelectorAll('p');

for (let p of paragraphs4) {
    let span = document.createElement('span');
    span.textContent = p.textContent;
    p.textContent = '';
    p.appendChild(span);
    
    let crossLink = document.createElement('a');
    crossLink.href = '';
    crossLink.textContent = ' cross';
    p.appendChild(crossLink);
    
    crossLink.addEventListener('click', function(event) {
        span.classList.toggle('crossed');
        event.preventDefault();
    });
}


let table10 = document.querySelector('#table10');
for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td');
        td.textContent = 'cell';
        tr.appendChild(td);
    }
    
    let actionTd = document.createElement('td');
    let actionLink = document.createElement('a');
    actionLink.href = '';
    actionLink.textContent = 'toggle green';
    actionTd.appendChild(actionLink);
    tr.appendChild(actionTd);
    
    actionLink.addEventListener('click', function(event) {
        tr.classList.toggle('green-bg');
        event.preventDefault();
    });
    
    table10.appendChild(tr);
}


let elem8 = document.querySelector('#elem8');
let toggle1 = document.querySelector('#toggle1');
toggle1.addEventListener('click', function() {
    elem8.classList.toggle('hidden');
});


let buttons2 = document.querySelectorAll('button[data-elem]');
for (let button of buttons2) {
    button.addEventListener('click', function() {
        let elem = document.querySelector('#' + this.dataset.elem);
        elem.classList.toggle('hidden');
    });
}


let buttons3 = document.querySelectorAll('p + button');
for (let button of buttons3) {
    button.addEventListener('click', function() {
        this.previousElementSibling.classList.toggle('hidden');
    });
}


let elem12 = document.querySelector('#elem12');
let items3 = elem12.querySelectorAll('li');
for (let item of items3) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
}


let table11 = document.querySelector('#table11');
let tds1 = table11.querySelectorAll('td');
let color = 'color1';
for (let td of tds1) {
    td.addEventListener('click', function() {
        if (color == 'color1') {
            color = 'color2';
        } else {
            color = 'color1';
        }
        this.classList.add(color);
    });
}


let list1 = document.querySelector('#list1');
let arr6 = [1, 2, 3, 4, 5];
for (let item of arr6) {
    let li = document.createElement('li');
    li.textContent = item;
    list1.appendChild(li);
}


let list2 = document.querySelector('#list2');
let arr7 = [1, 2, 3, 4, 5];
for (let item of arr7) {
    let li = document.createElement('li');
    li.textContent = item;
    
    li.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = li.textContent;
        
        li.textContent = '';
        li.appendChild(input);
        
        input.addEventListener('blur', function() {
            li.textContent = this.value;
            li.addEventListener('click', func);
        });
        
        li.removeEventListener('click', func);
    });
    
    list2.appendChild(li);
}

let newItem = document.querySelector('#newItem');
let addItem = document.querySelector('#addItem');
addItem.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = newItem.value;
    
    li.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = li.textContent;
        
        li.textContent = '';
        li.appendChild(input);
        
        input.addEventListener('blur', function() {
            li.textContent = this.value;
            li.addEventListener('click', func);
        });
        
        li.removeEventListener('click', func);
    });
    
    list2.appendChild(li);
    newItem.value = '';
});


let list3 = document.querySelector('#list3');
let arr8 = [1, 2, 3, 4, 5];
for (let item of arr8) {
    let li = document.createElement('li');
    li.textContent = item;
    
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = ' remove';
    li.appendChild(remove);
    
    li.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = li.textContent.replace(' remove', '');
        
        li.textContent = '';
        li.appendChild(input);
        li.appendChild(remove);
        
        input.addEventListener('blur', function() {
            li.textContent = this.value;
            li.appendChild(remove);
            li.addEventListener('click', func);
        });
        
        li.removeEventListener('click', func);
    });
    
    remove.addEventListener('click', function(event) {
        li.remove();
        event.preventDefault();
    });
    
    list3.appendChild(li);
}

let newItem2 = document.querySelector('#newItem2');
let addItem2 = document.querySelector('#addItem2');
addItem2.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = newItem2.value;
    
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = ' remove';
    li.appendChild(remove);
    
    li.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = li.textContent.replace(' remove', '');
        
        li.textContent = '';
        li.appendChild(input);
        li.appendChild(remove);
        
        input.addEventListener('blur', function() {
            li.textContent = this.value;
            li.appendChild(remove);
            li.addEventListener('click', func);
        });
        
        li.removeEventListener('click', func);
    });
    
    remove.addEventListener('click', function(event) {
        li.remove();
        event.preventDefault();
    });
    
    list3.appendChild(li);
    newItem2.value = '';
});


let list4 = document.querySelector('#list4');
let arr9 = [1, 2, 3, 4, 5];
for (let item of arr9) {
    let li = document.createElement('li');
    li.textContent = item;
    
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = ' remove';
    li.appendChild(remove);
    
    let cross = document.createElement('a');
    cross.href = '';
    cross.textContent = ' cross';
    li.appendChild(cross);
    
    li.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = li.textContent.replace(' remove', '').replace(' cross', '');
        
        li.textContent = '';
        li.appendChild(input);
        li.appendChild(remove);
        li.appendChild(cross);
        
        input.addEventListener('blur', function() {
            li.textContent = this.value;
            li.appendChild(remove);
            li.appendChild(cross);
            li.addEventListener('click', func);
        });
        
        li.removeEventListener('click', func);
    });
    
    remove.addEventListener('click', function(event) {
        li.remove();
        event.preventDefault();
    });
    
    cross.addEventListener('click', function(event) {
        li.classList.toggle('crossed');
        event.preventDefault();
    });
    
    list4.appendChild(li);
}

let newItem3 = document.querySelector('#newItem3');
let addItem3 = document.querySelector('#addItem3');
addItem3.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = newItem3.value;
    
    let remove = document.createElement('a');
    remove.href = '';
    remove.textContent = ' remove';
    li.appendChild(remove);
    
    let cross = document.createElement('a');
    cross.href = '';
    cross.textContent = ' cross';
    li.appendChild(cross);
    
    li.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = li.textContent.replace(' remove', '').replace(' cross', '');
        
        li.textContent = '';
        li.appendChild(input);
        li.appendChild(remove);
        li.appendChild(cross);
        
        input.addEventListener('blur', function() {
            li.textContent = this.value;
            li.appendChild(remove);
            li.appendChild(cross);
            li.addEventListener('click', func);
        });
        
        li.removeEventListener('click', func);
    });
    
    remove.addEventListener('click', function(event) {
        li.remove();
        event.preventDefault();
    });
    
    cross.addEventListener('click', function(event) {
        li.classList.toggle('crossed');
        event.preventDefault();
    });
    
    list4.appendChild(li);
    newItem3.value = '';
});
