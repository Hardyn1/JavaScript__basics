// 11 LESSON TASK 1 

// var name = "artem";
// var age = 22;
// var position = "married"
// var child = "none"


// console.log(typeof name);

// console.log(typeof age);

// console.log(typeof position);

// console.log(typeof child);

// if (position = "married") {
// 	console.log(true)
// }
// else {
// 	console.log(false)
// }

// task 2

// var height = 23;
// var width = 10;
// var result = height * width;

// console.log(result);


// task 3

// var h = 10;
// var s = 4;

// console.log(s ** h);

// task 4

// console.log(Infinity - "1");  //infinity ?
// console.log("42" + 42);  //4242
// console.log(2 + "1 1") //21 1
// console.log(99 + 101)  // 200
// console.log("1" - "1") // 0
// console.log("Result: " + 10 / 2)  //result 5
// console.log(3 + " bananas " + 2 + " apples "); //3 бананов и  2 яблока 



// var g = "Я"
// var u = "М"
// console.log(g>u)


// console.log(undefined = null);

// 12 LESSON TASK 1

// Строгое равно проверяет на равенство две величины,
//  при этом тип каждой из величин перед сравнением не изменяется (не приводится).
//  Если значения имеют различающиеся типы, то они не могут быть равными.

// СТРОГОЕ СРАВНЕНИЕ


"42" == 42; true
"0" == 0; true
"0" == false; true
"true" == true; false
true == (1 == "1"); true

"42" === 42; false
"0" === 0; false
"0" === false; false
"true" === true; false
true === (1 === "1"); false


console.log();


// TASK 2 

var a = "foo"

var b = "bar"

console.log(a+ +b)
// ВЫВЕЛО Foo + NaN означает что выполнена бессмысленная информация


// TASK 3 

// ("ананас" > "яблоко") false  сравнивается по символьно и по различию символов

// undefined == null true потому что оба значения как бы отсутсвуют
// undefined === null ; false

// TASK 4


// УСЛОВИЯ 

// if(10>9) {
// 	console.log("10 is bigger than 9");
// } else {
// 	console.log("10 is not bigger than 9")
// }

// var a = 50;

// if(a>40) {
// 	console.log("a is bigger than 40");
// } else {
// 	console.log("a is not bigger than 40")
// }


// ТЕРНАРНЫЙ ОПЕРАТОР

// a = 10;
// b = 20;
// var result

// // a > b ? result = "a > b": result = "a < b ";     A < B ЭТО FALSE
// console.log(result);









// console.log("Hello world !");

// var number = 1;

// var word = "any word"

//  var a = 1; // number числа или дробные
//  var b = "moscow"; //string строка
//  var c = true; //boolean истина или ложь
//  var d = null; //null  ничего или значение неизвестно
//  var e; //undefined если переменанная обьявлена но там ничего не положили
// ЭТО БЫЛИ 5 ПРИМИТИВНЫХ ТИПО ДАННЫХ

// УЖЕ НЕ ПРИМИТИВНОЕ
//  var f = {name: "Ivan"}; //object коллекция значений удобный тип данных с которым можно работать на протяжении всей программы



// var user = {
// 	userName : "Artjom",
// 	age : 23,
// 	position : married,
// }



// var name = "artem";
// var age = 23;
// var position = "married `engaged`";



// if (position) {
// 	console.log(true)
// }
// else {
// 	console.log(false)
// }




//number
//если нулей много и трудно посчитать то можно записать по другому
// var n = 1e15;
// один слева от четырех
// var num = 1;
// var num2 = 1.10;
// var n = 1e-4;
// console.log(n)


// string
// обратный slash / для строки
// var t = "ivan";
// var text = "any text";
// var words = "she says to him: `Hello` ";
// console.log(words)


// var t = true; //истина 1  могут представляться как 1 0
// var n = false; // ложь 0


// if (10<2) {
// 	console.log(1)
// }else {
// 	console.log(2)
// }

// ПРОВЕРКА НА ТИП ДАННЫХ

// console.log(typeof a);

// console.log(typeof f);

// console.log(typeof c);

// console.log(typeof d);

// console.log(typeof e);

// console.log(typeof f);

// var num1 = 50;
// var num2 = 50;
// var summa = num1 * num2;

// КОНКОТЕНАЦИЯ ПРОЦЕСС СКЛЕИВАНИЯ СТРОК  + он воспринимает как строку

// var word1 = "Hello";
// var word2 = "My";
// var word3 = "Friend";
// var result = word1 + word2 + word3;
// console.log(result)

// ОСТАТОК ОТ ДЕЛЕНИЯ

// console.log(10 % 7); //3

// ВОЗВЕДЕНИЕ В СТЕПЕНЬ

// console.log(5**2);


// ИНКЕМЕНТ ИЛИ ДЕКРЕМНЕТ
// ИНКЕМЕНТ УВЕЛИЧИВАЕТ НА ОДНУ
// var b = 3;
// console.log(++b);

// // ДЕКРЕМЕНТ УМЕНЬШАЕТ НА ОДНУ

// var a = 3;
// console.log(--b);
// b++ ЭТО ВСЕ РАВНО ЧТО B+1