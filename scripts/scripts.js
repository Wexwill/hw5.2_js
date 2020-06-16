    // Task 1

console.log('Task 1');

function calc(a, b, c) {
    console.log((a - b) / c);
}
calc(24,4,5);
console.log('');

    // Task 2

console.log('Task 2');

function kyb(a) {
    var result = ('квадрат числа = ' + (a * a) + '; куб числа = ' + (a * a * a));
    return result;
}
console.log(kyb(12));
console.log('');

    // Task 3

console.log('Task 3');

function max(a, b) {
    if (a < b) return b
    else return a;
}
console.log(max(8, 6));
console.log('');

    // Task 4

console.log('Task 4');

function array(a, b) {
    let arr = [];

    if (a < b) {
        for (let i = a; i <= b; i++) {
            arr.push(i);
        }
    } else {
        for (let i = b; i <= a; i++) {
            arr.push(i);
        }
    }
    return arr;
}

function vivod_array() {
    let vivod_array = array;
    console.log(vivod_array(+prompt('Введите первое число'), +prompt('Введите второе число')));
}
vivod_array();
console.log('');

    // Task 5

console.log('Task 5');

function isEven(a) {
    if (a % 2 == 0) return true
    else return false
}
console.log(isEven(4));
console.log('');

    // Task 6

console.log('Task 6');

function massiv(arr) {
    let newarr = [],
        i = 0;

    for(; i <= arr.length; i++) {
        if (isEven(arr[i]) == true) {
            newarr.push(arr[i]);
        }
    }
    return newarr
}
console.log(massiv([1,4,5,7,8,9,10]));
console.log('');

    // Task 7

console.log('Task 7');

function piramida(a) {

    let arr = [];
    if (arguments.length == 1) {
        for (let i = 1; i <= a; i++) {
            for (let j = 0; j < i; j++) {
                arr.push(i);
            }
            let arrl = arr.join('');
            console.log(arrl);
            arr = [];
        }
    } else {
        for (let i = 1; i <= a; i++) {
            for (let j = 0; j < i; j++) {
                arr.push(arguments[1]);
            }
            let arrl = arr.join('');
            console.log(arrl);
            arr = [];
        }
    }
}
piramida(9);
piramida(9, '*');
console.log('');    

    // Task 8

console.log('Task 8');

function fibon(n) {
    let a = 0,
        b = 1,
        array = [];

    for (let i = 0; i <= n; i++) {
        // if (array[i] >= 1000) break;
        array.push(a);
        let c = a + b;
        a = b;
        b = c;
        if (array[i] >= 1000) break;
    }
    return array;
}
console.log(fibon(1000));
console.log(''); 

    // Task 9

console.log('Task 9');

function number(x) {
    let summa = 0,
        num = String(x);

    for (let i = 0; i < num.length; i++) {
        summa += +num[i];
    }
    num = String(summa);
    if (summa > 9) number(summa);
    else console.log(num);
}
number(919);
console.log('');

    // Task 10

console.log('Task 10');

    let i = 0;
function arra(d) {
    console.log(d[i]);
    i++;
    if (i < d.length) arra(d);
}
arra([1,2,3,4,5,6,7,8]);