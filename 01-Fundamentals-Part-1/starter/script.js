/* window.alert("this is a stupid alert : )")

console.log(" yo homie suppp i am writing this one using external js which is better way of presentation ");
console.log(5 + 4);

let firstName = 'yash'; //just like a box that stores value
console.log(firstName); // just like a box the value stores can be changed
firstName = 'yashveer';
console.log(firstName);

// rules for var
// camel case - first world witho lower and next word with upper case
// username may never start with a number
// number letters _ and $ are only alllowed char


let first_name = 'ayush';
 console.log(first_name);

// although name is a keyword still it can be used as a var in js

// never use var name that starts with uppercase letter as they are used in oop

// and the var with all capital letters are gerneally used for storing the constants which are var whose value cant be chnaged once declared

let myFirstJob = 'programmer';
// thats a good approach for the var name



// 7 types of  primitve datatypes are there in js

// number
console.log(typeof (24.5));
let idk = "whatthe fuck ";
console.log(typeof (idk));
// bool is alwys true or false
let what;
console.log(typeof (what));

console.log(typeof (5 > 8));

// dynamic typing

let greeting = " hello ";
console.log(typeof (greeting));
greeting = 4;
console.log(typeof (greeting));

let empty = null;
console.log(typeof (empty)); // js shows the typeof null as object


// var is the old way of decalring keywords
// let and const were introduced on es6

// const are the var that are not supposed to chnage anytime in the future

const birthYear = 2004;
console.log(typeof (birthYear));
var age = 19;

// only use var when sure that the value may change in future
// by default use const


// operators

console.log(2 ** 3);
console.log(5 % 2); // gives us the reaminder
const ageYashveer = 19;
const ageHarsh = 18;
console.log(ageHarsh, ageYashveer);


console.log(ageHarsh + 4, ageYashveer - 3);

const firstNamee = "yash";
const lastNamee = "dalal";
const fullNamee = firstNamee + " " + lastNamee;
console.log(fullNamee);
// = is known as assignment operators

let x = 10;
x += 10;
console.log(x);
x *= 2;
console.log(x);
x += 90;
console.log(x);
x /= 5;
console.log(x);
x--;
console.log(x);

console.log(ageHarsh > ageYashveer);
console.log(18 >= ageHarsh);



// precedence of operators ->

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b)

const avgAge = (ageHarsh + ageYashveer) / 2;
console.log(avgAge);


/////// strings ////////


const first = "yash";
const last = "dalal";
const birthYear = 2004;
const bio = "I'm " + first + " " + last + " " + "and i was born in " + birthYear;
console.log(bio); // number will be converted to the string just to make the concat possible

const yashNew = `hello my name  is ${first} ${last} and i was born in ${birthYear - 1}`;
console.log(yashNew);

console.log(` sting written
     using backtics `);

console.log(" and this string is \n\
     written using double quotes ");

const agee = 14;
const oldEnough = (agee >= 18);
if (oldEnough) {
    console.log(`you are old enough to have a lice 🚗`);
}
else {

    console.log(`you are ${18 - agee} year younger to apply for the lice 🚔 `);

}

const yearOfBirth = 2001;
let century;
if (yearOfBirth <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

// type conversion and coercion
// type conversion - when we manually convert data type from one type to another
// type coercion - when system auto converts

let inputYear = window.prompt('enter the year');
console.log(typeof (inputYear));
console.log(inputYear + 18); // this conversion of data type is done by the system itself and is known as type coercion
inputYear = Number(inputYear);
console.log(typeof (inputYear));
console.log(inputYear + 18);
inputYear = String(inputYear);
console.log(typeof inputYear);

let testString = `yash`;

console.log(Number(testString));

// 3-4 types of coversion are avaliable in the js


console.log(`24` - `4` - 10); //ANOTHER EXAMPLE OF  TYPE COERCION



// falsy values are values that are  not exactly false but they return false when we try to convert them
// basically there are 5 types of falsy values
// 1)0
// 2)empty string ""
// 3)undefined
// 4)null
// 5)nan (NO PRACYIAL USE )

console.log((Boolean(0)));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean("yo"));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log(`person has a lot of money`);
}
else {
    console.log(`person do not have a single penny `);
}


let height;
if (height) {
    console.log(`you are tall`);
}
else {
    console.log(`are you from lilliput ?. `);
}




/////////////////////////// EQUALITY OPERATORS

const agge = 18;
if (agge == 18) {

    console.log("you just turned as adult ");
}
if (agge == "18") { //avoid this as much you can

    console.log("you just turned as adult ");
}
if (agge === "18") { //strict equLity check

    console.log("you just turned as adult ");
}

const favouriteNumber = Number(prompt(`enter your fav number:`));

console.log(favouriteNumber);
console.log(typeof favouriteNumber)

console.log(7 != `7`);
console.log(7 !== `7`);



////////////BOOLEAN LOGIC

///AND - both true
//OR - either one true
//NOT - unary operator / acts on one

let agE = window.prompt("what is your age :");
if (agE < 50 && agE > 18) {
    console.log(" you can apply for lice ");
}
else {
    console.log("you may be too younger or too old to drive a car ");
}
const hasLice = true;
const hasGoodVision = true;
let isTired;
const ableToDrive = hasLice && hasGoodVision && !isTired;

console.log(ableToDrive);




///////////////SWITCH STATEMENT


const day = `tuesday`;
switch (day) {
    case 1: // value of case can be number or string
        console.log(`it's a monday`);
        break;
    case `tuesday`:
        console.log(`it's a tuesday`);
        break;
    case 3:
        console.log(`it's a wednesday`);
        break;
    case 4:
    case 5:
        console.log(`it's a thrusday`);
        break;


    case 6 && 7:
        console.log(`it's a saturday`);
        break;

    default:
        console.log("enter a valid day");
}

*/

/////////// STATEMENT & EXPRESSIONS 
// statement produce values
// expression does not


///////// TERNAY / CONDITIONAL OPERATOR 



const hungry = false;
hungry ? console.log("you can have my food ") : console.log(`you cant have my food `);

const aGe = window.prompt("enter your age :");
const drink = aGe >= 18 ? `wine 🍷` : `milk 🍼`;
console.log(drink);

console.log(`i am ${aGe} so my drink will be ${aGe > 18 ? ("wine") : ("milk")}`);