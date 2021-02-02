//Задание 1
console.log('Задание 1: ');

let name=prompt('Введите Ваше имя'),
    age=prompt('Введите Ваш возраст'),
    city=prompt('Введите город проживания'),
    phone=prompt('Введите номер'),
    email=prompt('Введите почту'),
    company=prompt('Введите название компании, в которой вы работаете');
console.log('Меня зовут '+ name +'. Мне '+ age + ' лет.' + ' Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: '+ phone + ', ' + email + '.');

//Задание 2

console.log(' ');
console.log('Задание 2: ');

let year=2020 - age;
console.log(name + ' родился в ' + year + ' году.'); 

//Задание 3

console.log(' ');
console.log('Задание 3: ');

let number = '237247';
if (number[0] + number[1] + number[2] == number[3] + number[4] + number[5]) {
   console.log('да'); 
} else console.log('нет'); 

//Задание 4

console.log(' ');
console.log('Задание 4: ');

let inq = -3;
if (inq>0) {
    console.log('Верно');
} else console.log('Неверно');

//Задание 5

console.log(' ');
console.log('Задание 5: ');

let a=10,
    b=2,
    sum=a+b,
    df=a-b,
    pr=a*b,
    qt=a/b;
console.log('Сумма = ' + sum);
if (sum>1) {
    sqsum=sum**2;
    console.log('Сумма в квадрате = ' + sqsum);
}
console.log('Разность = ' + df);
console.log('Произведение = ' + pr);
console.log('Частное = ' + qt);

//Задание 6

console.log(' ');
console.log('Задание 6: ');

if ((a>2 && a<11) || (b>6 && b<14)) {
    console.log('Верно');
} else console.log('Неверно');

//Задание 7

console.log(' ');
console.log('Задание 7: ');

let n = 28;
if (n < 15) {
    console.log('Первая четверть');
} else if (n < 30) {
    console.log('Вторая четверть');
} else if (n < 45) {
    console.log('Третья четверть');
} else if (n < 60) {
    console.log('Четвертая четверть');
} else console.log('Введено неверное число');

//Задание 8

console.log(' ');
console.log('Задание 8: ');

let day = 28;
if (day <= 10) {
    console.log('Первая декада');
} else if (day <= 20) {
    console.log('Вторая декада');
} else if (day <= 31) {
    console.log('Третья декада');
} else console.log('Введено неверное число');

//Задание 9

console.log(' ');
console.log('Задание 9: ');

let days=1303;
let years=(days-days%365)/365;
let month=(days%365-(days%365%31))/31;
let week=(days%365%31-(days%365%31%7))/7;
let day9=days%365%31%7;
console.log(days + ' дней - это ' + years + ' года(лет), ' + month + ' месяцев, ' + week + ' недель(и) и ' +day9 + ' день.');

years=days/365;
month=days/31;
week=days/7;
hours=days*24;
min=hours*60;
sec=min*60;
if (days>365) {
    console.log('Другими словами, в ' + days + ' дней: ' + years + ' года(лет), ' + month + ' месяцев, ' + week + ' недель, ' + hours + ' часов, ' + min + ' минут, ' + sec + ' секунд.');
} else if (days>31) {
    console.log('Меньше года');
} else if (days>7) {
    console.log('Меньше месяца');
} else console.log('Меньше недели');

//Задание 10

console.log(' ');
console.log('Задание 10: ');

let day10=129;
let month10=0;

if (day10<=31) {
    month10=1;
    console.log('Январь');
} else if (day10<=59) {
    month10=2;
    console.log('Февраль');
} else if (day10<=90) {
    month10=3;
    console.log('Март');
} else if (day10<=120) {
    month10=4;
    console.log('Апрель');
} else if (day10<=151) {
    month10=5;
    console.log('Май');
} else if (day10<=181) {
    month10=6;
    console.log('Июнь');
} else if (day10<=212) {
    month10=7;
    console.log('Июль');
} else if (day10<=243) {
    month10=8;
    console.log('Август');
} else if (day10<=273) {
    month10=9;
    console.log('Сентябрь');
} else if (day10<=304) {
    month10=10;
    console.log('Октябрь');
} else if (day10<=334) {
    month10=11;
    console.log('Ноябрь');
} else if (day10<=365) {
    month10=12;
    console.log('Декабрь');
}

switch(month10) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
    break
    case 3:
    case 4:
    case 5:
        console.log('Весна');
    break
    case 6:
    case 7:
    case 8:
        console.log('Лето');
    break
    default:
        console.log('Осень');
}