// Задание 1
;(function(selector1, selector2, selector3, selector4) {
    let input1 = document.querySelector(selector1);
    let input2 = document.querySelector(selector2);
    let input3 = document.querySelector(selector3);
    let button = document.querySelector(selector4);
    
    button.addEventListener('click', function() {
        let sum = Number(input1.value) + Number(input2.value) + Number(input3.value);
        console.log('Sum:', sum);
    });
})('#input1', '#input2', '#input3', '#button1');


// Задание 2
;(function(root) {
    let parent = document.querySelector(root);
    
    let div1 = parent.querySelector('#div1');
    let div2 = parent.querySelector('#div2');
    let div3 = parent.querySelector('#div3');
    let res = parent.querySelector('#res1');
    let button = parent.querySelector('#button2');
    
    button.addEventListener('click', function() {
        let num1 = Number(div1.textContent);
        let num2 = Number(div2.textContent);
        let num3 = Number(div3.textContent);
        
        res.textContent = num1 + num2 + num3;
    });
})('#parent1');


// Задание 3
let config1 = {
    root:  '#parent2',
    type:  'p',
    amount: 5
};

;(function(config) {
    let parent = document.querySelector(config.root);
    
    for (let i = 1; i <= config.amount; i++) {
        let elem = document.createElement(config.type);
        elem.textContent = `Element ${i}`;
        parent.append(elem);
    }
})(config1);


// Задание 4
let config2 = {
    root:  '#parent3',
    type:  'div',
    amount: 3
};

;(function({root, type, amount}) {
    let parent = document.querySelector(root);
    
    for (let i = 1; i <= amount; i++) {
        let elem = document.createElement(type);
        elem.textContent = `Div ${i}`;
        parent.append(elem);
    }
})(config2);


// Задание 5
let config3 = {
    root:  '#parent4',
    amount: 4
};

;(function({root, type = 'span', amount = 5}) {
    let parent = document.querySelector(root);
    
    for (let i = 1; i <= amount; i++) {
        let elem = document.createElement(type);
        elem.textContent = `Span ${i}`;
        parent.append(elem);
    }
})(config3);


// Задание 6
;(function() {
    let str1 = 'переменная модуля 1';
    let str2 = 'переменная модуля 2';
    let str3 = 'переменная модуля 3';
    
    function func1() {
        console.log('функция модуля 1');
    }
    function func2() {
        console.log('функция модуля 2');
    }
    function func3() {
        console.log('функция модуля 3');
    }
    
    window.exportedStr = str1;
    window.exportedFunc1 = func1;
    window.exportedFunc2 = func2;
})();

// Проверка экспорта
console.log(exportedStr);
exportedFunc1();
exportedFunc2();


// Задание 7
;(function() {
    let str1 = 'module variable 1';
    let str2 = 'module variable 2';
    let str3 = 'module variable 3';
    
    function func1() {
        console.log('module function 1');
    }
    function func2() {
        console.log('module function 2');
    }
    function func3() {
        console.log('module function 3');
    }
    function func4() {
        console.log('module function 4');
    }
    function func5() {
        console.log('module function 5');
    }
    
    window.myModule = {
        str1,
        str2,
        func1,
        func2,
        func3,
        func4,
        func5
    };
})();

// Проверка экспорта объекта
console.log(myModule.str1);
myModule.func1();
myModule.func3();


// Задание 8 - Библиотека математических функций
;(function() {
    function avg1(arr) {
        return sum(arr, 1) / arr.length;
    }

    function avg2(arr) {
        return sum(arr, 2) / arr.length;
    }

    function avg3(arr) {
        return sum(arr, 3) / arr.length;
    }

    // вспомогательная функция
    function sum(arr, pow) {
        let res = 0;
        
        for (let elem of arr) {
            res += elem ** pow;
        }
        
        return res;
    }
    
    window.mathLib = {avg1, avg2, avg3};
})();

// Проверка библиотеки
let testArr = [1, 2, 3, 4];
console.log('avg1:', mathLib.avg1(testArr));
console.log('avg2:', mathLib.avg2(testArr));
console.log('avg3:', mathLib.avg3(testArr));


// Задание 9 - Упрощенная версия библиотеки underscore
;(function() {
    function each(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    }
    
    function map(arr, callback) {
        let result = [];
        each(arr, function(item, index, array) {
            result.push(callback(item, index, array));
        });
        return result;
    }
    
    function filter(arr, callback) {
        let result = [];
        each(arr, function(item, index, array) {
            if (callback(item, index, array)) {
                result.push(item);
            }
        });
        return result;
    }
    
    function find(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], i, arr)) {
                return arr[i];
            }
        }
        return undefined;
    }
    
    function reduce(arr, callback, initial) {
        let result = initial !== undefined ? initial : arr[0];
        let startIndex = initial !== undefined ? 0 : 1;
        
        for (let i = startIndex; i < arr.length; i++) {
            result = callback(result, arr[i], i, arr);
        }
        return result;
    }
    
    function contains(arr, value) {
        return find(arr, function(item) {
            return item === value;
        }) !== undefined;
    }
    
    function pluck(arr, property) {
        return map(arr, function(item) {
            return item[property];
        });
    }
    
    function max(arr) {
        return reduce(arr, function(max, item) {
            return item > max ? item : max;
        }, -Infinity);
    }
    
    function min(arr) {
        return reduce(arr, function(min, item) {
            return item < min ? item : min;
        }, Infinity);
    }
    
    function shuffle(arr) {
        let result = arr.slice();
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }
    
    window._ = {
        each,
        map,
        filter,
        find,
        reduce,
        contains,
        pluck,
        max,
        min,
        shuffle
    };
})();

// Проверка библиотеки _
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Original array:', numbers);
console.log('Map (x2):', _.map(numbers, x => x * 2));
console.log('Filter (even):', _.filter(numbers, x => x % 2 === 0));
console.log('Find (>5):', _.find(numbers, x => x > 5));
console.log('Reduce (sum):', _.reduce(numbers, (sum, x) => sum + x, 0));
console.log('Contains 5:', _.contains(numbers, 5));
console.log('Max:', _.max(numbers));
console.log('Min:', _.min(numbers));
console.log('Shuffle:', _.shuffle(numbers));

let objects = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 20}
];

console.log('Pluck names:', _.pluck(objects, 'name'));
