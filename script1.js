"use strict";
alert('text'); // комментарий

//первое
let num = 123;
alert(num);

//dnjhjt
let a; 

a = 10;  
alert(a); 

a = 20;  
alert(a); 

//nhtnmt
let a = 1 + 2 + 3;
alert(a);



let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);




let c = 10;
let d = 5;
let result = c + d;
alert(result);




let a = 1;
let b = 2;
let c = 3;
alert(a + b + c);




let a = 10;
let b = 5;
let c = a - b;
let d = 7;
let result = c + d;
alert(result);



let a = 1.5;
let b = 0.75;
let result = a + b;
alert(c);



let a = -100;
alert(a);


let a = 25;  
alert(-a);



let a = 13;
let b = 5;
alert(a % b);


alert(2 ** 10);


let str = 'Диана';
let str = 'Эреджепова';
alert(str);


let str = '!!!';
alert(str);


let str1 = 'java';
let str2 = 'script';
alert(str1 + str2);


let str1 = 'hello';
let str2 = 'world';
alert(str1 + ' ' + str2);



let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa ${str1} bbb ${str2} ccc`; 


let str = `a
b
c`;


let smt;
alert(smt);


let ok = null;
alert(ok);


let myTrue = true;
alert(myTrue);

let myFalse = false;
alert(myFalse);


//37
let str1 = "Apple";
let str2 = "Banana";
alert(str1 * str2); 


//38
alert( 10 / 0);
alert(-10 / 0);

//39
let myVariable = "Hello, World!";
console.log(myVariable); 

let var1 = 10;
let var2 = 20;
let var3 = 30;
console.log(var1, var2, var3); 

//40
// Числовой тип
console.log(42); // число

// Строковый тип
console.log('Hello'); // строка

// Логический тип
console.log(true); // булевое значение true
console.log(false); // булевое значение false

// Значение NaN
console.log(NaN); // NaN

// Значение null
console.log(null); // null

// Неопределенное значение
console.log(undefined); // undefined

// Объект
console.log({ name: 'Alice', age: 25 }); // объект

// Массив
console.log([1, 2, 3, 4, 5]); // массив


const PI = 3.14;
const radius = 5;
const circumference = 2 * PI * radius;
console.log(circumference);

let m = '10';
let q = '20';
alert(Number(m) + Number(q));

let m1 = +'2';
let q2 = +'3';
alert(m1 + q2); // выведет '23'

alert(Number('2s')); 

let num5 = parseInt('5px');
let num6 = parseInt('6px');
let sum = num5 + num6;
alert(sum);

let num9 = parseFloat('5.5px');
let num8 = parseFloat('6.25px');
let sum2 = num9 + num8;
alert(sum2);

let num7 = parseFloat('5.5px');
let num10 = parseFloat('6.25px');
let sum3 = num7 + num10;
let result = sum3 + 'px';
alert(result);

let go = 1;
let like = 2;
alert(String(go) + String(like));

let hub = 12345;
let str4 = String(hub);  
alert(str4.length);     

let dom = 12345;
let more = 67890;
let length1 = String(dom).length;
let length2 = String(more).length;
let sum4 = length1 + length2;
alert(sum4); 

let str5 = 'abcde';
alert(str5[0]); 
alert(str5[2]);
alert(str5[4]);

let str6 = 'abcde';
alert(str6[4]);
alert(str6[3]);
alert(str6[2]); 
alert(str6[1]);
alert(str6[0]);

let str7 = 'abcde';
let num12 = 4; // номер символа в переменной
alert(str7[num12]);

let str8 = 'jkghf';
alert(str8[str8.length - 1]); 

let str9 = 'uiopl';
alert(str9[str9.length - 2]);

//62
let age = prompt('Ваш возраст?');
alert('Ваш возраст: ' + age);

//63
let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));

alert(num1 + num2); 


let side = Number(prompt('Введите сторону квадрата'));
let area = side * side;

alert('Площадь квадрата: ' + area);


let length = Number(prompt('Введите длину прямоугольника'));
let width = Number(prompt('Введите ширину прямоугольника'));
let perimeter = 2 * (length + width);

alert('Периметр прямоугольника: ' + perimeter);

//64
document.write('Привет, мир!');

document.write('<i>Привет, мир!</i>');

let str = 'text';
document.write('<i>' + str + '</i>');

document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');


//65
let num1 = 1;
let num2 = 2;
console.log('сумма: ' + (num1 + num2));

let a = 1;
let b = 2;
console.log(a + b);

let num = '123';
let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
console.log(sum);

let num = 123;
let str = String(num);
console.log(str[0]);


let a = 0;
console.log(++a);

let num = 123;
let str = String(num);
console.log(str.length);


let a = 24 * 60 * 60;
console.log(a);


let num = 123;
let str = String(num);
console.log(str.length);


let num = 123;
let str = String(num);
console.log(str[str.length - 1]);


let num = 123;
let str = String(num);
console.log(str[str.length - 1]);

//66
alert(60 * 60 * 24);
alert(60 * 60 * 24 * 30);
alert(60 * 60 * 24 * 365);
alert(60 * 24);
alert(60 * 24 * 365);
alert(1024 * 1024);
alert(1024 * 1024 * 1024);
alert(1024 * 1024 * 1024 * 10);
alert(1024 * 1024 * 1024 * 1024);
alert(1024 * 1024 * 1024);

//67
let r = 5;
let s = 3.14 * r * r;
alert(s);

let a = 4;
s = a * a;
alert(s);

a = 4;
let b = 6;
s = a * b;
alert(s);

a = 4;
b = 6;
let p = 2 * (a + b);
alert(p);

let tc = 25;
let tf = (tc * 9 / 5) + 32;
alert(tf);

tf = 77;
tc = (tf - 32) * 5 / 9;
alert(tc);

//68
let arr1 = [1, 2, 3, 4, 5];
alert(arr1);
console.log(arr1);

let arr2 = ['яблоко', 'банан', 'вишня'];
alert(arr2);
console.log(arr2);

//69
let arr1 = [1, 2, 3];
alert(arr1[0]);
alert(arr1[1]);
alert(arr1[2]);

let arr2 = [1, 2, 3];
alert(arr2[0]);
alert(arr2[1]);
alert(arr2[2]);

let arr3 = [1, 2, 3];
alert(arr3[0] + arr3[1] + arr3[2]);

let arr4 = ['a', 'b', 'c', 'd'];
alert(arr4[0] + '+' + arr4[1] + '+' + arr4[2] + '+' + arr4[3]);

//70
let arr1 = [10, 20, 30, 40, 50];
alert(arr1.length);

let arr2 = ['яблоко', 'банан', 'вишня', 'груша'];
alert(arr2[arr2.length - 1]);

//71
let arr = ['a', 'b', 'c'];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
alert(arr);

//72
let arr = [1, 2, 3, 4, 5];
arr[0] += 3;
arr[1] += 3;
arr[2] += 3;
arr[3] += 3;
arr[4] += 3;
alert(arr);

//73
let arr = [1, 2, 3];
arr[0]++;
arr[1]++;
arr[2]++;
alert(arr);

//74
let arr1 = [];
arr1[0] = 1;
arr1[1] = 2;
arr1[2] = 3;
alert(arr1);

let arr2 = [1, 2, 3];
arr2[3] = 4;
arr2[4] = 5;
alert(arr2);

//75
let arr = [];
arr[3] = 'a';
arr[8] = 'b';
alert(arr.length);

//76
let arr1 = [];
arr1.push(1);
arr1.push(2);
arr1.push(3);
alert(arr1);

let arr2 = [1, 2, 3];
arr2.push(4);
arr2.push(5);
alert(arr2);

//77
let arr1 = ['a', 'b', 'c'];
let key = 2;
alert(arr1[key]);

let arr2 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
alert(arr2[key1] + arr2[key2]);

//78
let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[1];
delete arr[3];
alert(arr.length);
alert(arr);

//79
let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length - 1]);

let arr = [1, 2, 3, 4, 5];
console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

//80
 let obj = {
          1: 'понедельник',
          2: 'вторник',
          3: 'среда',
          4: 'четверг',
          5: 'пятница',
          6: 'суббота',
          7: 'воскресенье'
        };
  
        console.log(obj);
  
        let obj1 = {
          1: 'январь',
          2: 'февраль',
          3: 'март',
          4: 'апрель',
          5: 'май',
          6: 'июнь',
          7: 'июль',
          8: 'август',
          9: 'сентябрь',
          10: 'октябрь',
          11: 'ноябрь',
          12: 'декабрь'
        };
        console.log(obj1);
      });
      let user = {
        name: 'Джемиля',
        surname: 'Ибадуллаева',
        patronymic: 'Сейтлюмановна'
      };
      
      console.log(user.surname + ' ' + user.name + ' ' + user.patronymic);
      let date = {
        year: 2025,
        month: 10,
        day: 6
      };
      
      console.log(date.year + '-' + date.month + '-' + date.day);
      let obj2 = {
        '1a': 1,
        'b2': 2,
        'c-c': 3,
        'd 4': 4,
        'e5': 5
      };
      
      console.log(obj2['1a']);
      console.log(obj2['b2']);
      console.log(obj2['c-c']);
      console.log(obj2['d 4']);
      console.log(obj2['e5']);
      let obj3 = {x: 1, y: 2, z: 3};

      for (let key in obj3) {
        obj3[key] = obj3[key] * obj3[key];
      }
      
      console.log(obj3);
      let obj4 = {};

        obj4.a = 1;
        obj4.b = 2;
        obj4.c = 3;
        obj4.d = "hello";
        obj4.e = [1, 2, 3];

       console.log(obj4);
       let obj5 = {
        name: "Джемиле",
        age: 18,
        city: "Симферополь"
      };
      
      console.log(obj5.age);
      console.log(obj5.city);
      console.log(obj5.name);
      
      function displayObjectProperties(obj5) {
        console.log("Имя:", obj5.name);
        console.log("Возраст:", obj5.age);
        console.log("Город:", obj5.city);
      }
      
      displayObjectProperties(obj5);
      
      let obj6 = {
        city: "Симферополь",
        age: 19,
        name: "Эрвин"
      };
      
      displayObjectProperties(obj6);
      
      console.log(obj6.name);
      console.log(obj6['age']); 
     
     
      let obj7 = {x: 1, y: 2, z: 3};
      let keys = Object.keys(obj7);
      console.log(keys);
      
    let obj8 = {x: 1, y: 2, z: 3};

    let count = Object.keys(obj8).length;
    console.log(count);
    
    let obj9 = {x: 1, y: 2, z: 3};
    let key = 'y';
    console.log(obj9[key]);
    
    let obj10 = {x: 1, y: 2, z: 3};
    console.log(obj10['x']);

    let obj11 = {x: 1, y: 2, z: 3};
    let key1 = 'x';
    console.log(obj11[key1]);

    let obj12 = {x: 1, y: 2, z: 3};
    let prop = 'x';
    console.log(obj12[prop]);

    let obj13 = {x: 1, y: 2, z: 3};
    let prop2 = 'x';
    console.log(obj13[prop2]);
    
    let obj14 = {
        x: 1,
        y: 2,
        z: 3
      };
      
      let key2 = 'x';
      let key3 = 'y';
      let key4 = 'z';
      
      let newObj = {
        [key2]: obj14[key2],
        [key3]: obj14[key3],
        [key4]: obj14[key4]
      };
      
      console.log(newObj);
      
      let { [key2]: x, [key3]: y, [key4]: z } = obj14;
      
      let anotherNewObj = {
        [key2]: x,
        [key3]: y,
        [key4]: z
      };
      
      console.log(anotherNewObj);
      const arr = [1, 2, 3, 4, 5];
      const res = arr[1] + arr[2];
      console.log(res);

      let obj15 = {x: 1, y: 2, z: 3};
      console.log(obj15['x']);

      let obj16 = {x: 1, y: 2, z: 3};
      let key5 = 'x';
      console.log(obj16[key5]);


