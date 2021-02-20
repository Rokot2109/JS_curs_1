//--------задание1--------//

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 стоит преинкремент увеличивает сразу на 1.
d = b++; alert(d);           // 1 стоит постинкремент увеличивает не сразу на 1, сначала возвращает.
c = (2 + ++a); alert(c);      // 5 в a сейчас 2, преинк делает 3, итого 2+3=5.
d = (2 + b++); alert(d);      // 4 в b сейчас 1 , постинк уже делает 2 , итого 2+2=4.
alert(a);                    // 3 выдаст 3 так как было 3 , а преинк , сразу увеличивает.
alert(b);                    // 3 выдаст 3 так как стояло b++ и значение было 2 , увеличит на 1.

//----------конец задания1-------------------------//

//--------задание2--------//
var a = 2;
var x = 1 + (a *= 2); //операция одновременно умножения и присваивания, будет 5, 1+4=5
alert(x);

//----------конец задания2-------------------------//

//--------задание3--------//
var a = Math.floor("5.01");
var b = Math.floor("-7.81");
if (a > 0 && b > 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    alert(a + b);
}

//----------конец задания3-------------------------//

//--------задание4--------//

var a = +prompt('Введите число от 1 до 15');

switch (a) {
    case 1:
        alert('1');
    case 2:
        alert('2');
    case 3:
        alert('3');
    case 4:
        alert('4');
    case 5:
        alert('5');
    case 6:
        alert('6');
    case 7:
        alert('7');
    case 8:
        alert('8');
    case 9:
        alert('9');
    case 10:
        alert('10');
    case 11:
        alert('11');
    case 12:
        alert('12');
    case 13:
        alert('13');
    case 14:
        alert('14');
    case 15:
        alert('15');
        break;

    default:
        alert('неккоректный ввод');

}
// как можно короче записать с помощью switch case ?
// или циклом 
var a = +prompt('Введите число от 1 до 15');

if (a < 1 || a > 15) {
    alert('Число вне диапазона 1..15');
} else {
    for (i = a; i <= 15; i++) {
        alert(i);
    }
}
//----------конец задания4-------------------------//

//--------задание5--------//

function summa(x, y) {
    return (x + y);
}
Dvorec_Putina = summa(20, 10)
alert(Dvorec_Putina);

function minus(x, y) {
    return (x - y);
}
Dvorec_Putina = minus(20, 10)
alert(Dvorec_Putina);

function umnozh(x, y) {
    return (x * y);
}
Dvorec_Putina = umnozh(20, 10)
alert(Dvorec_Putina);

function delenie(x, y) {
    return (x / y);
}
Dvorec_Putina = delenie(20, 10)
alert(Dvorec_Putina);

//----------конец задания5-------------------------//

//--------задание6--------//

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'summa':
            return summa(arg1, arg2);
            break;
        case 'minus':
            return minus(arg1, arg2);
            break;
        case 'umnozh':
            return  umnozh(arg1, arg2);
            break;
        case 'delenie':
            return delenie(arg1, arg2);
            break;
    }

}
Dvorec_Putina = mathOperation(20, 10, 'minus')
alert(Dvorec_Putina);
//----------конец задания6-------------------------//

//--------задание7--------//

// 0 - это число , а null это значение которое указывает на отсутствующий объект в js (старый баг)
// а так null, это ничего , полное отсутствие.
// и мы сравниваем ничего с нулём.
// в вырожениях null >= 0 и null <= 0 // true, так заложена алгоритмика сравния js
// читал разборы по этой теме (не совсем конечно понял :) )

null > 0; // false
null < 0; // false
null == 0; // false
null === 0; // false
null !== 0  // true
null != 0  // true
null >= 0; // true
null <= 0; // true

//----------конец задания7-------------------------//

//--------задание8--------//
// нашел и скопировал функцию , вроде понял, что это вызов самой себя, с условием
// function power(val, pow) ругается. 
// очень хотелось бы разобрать это на уроке.

function pow(x, n) {
    if (n != 1) { 
      return x * pow(x, n - 1);
    } else {
      return x;
    }
  }
  
  alert( pow(4, 3) ); // 64

 //----------конец задания8-------------------------//