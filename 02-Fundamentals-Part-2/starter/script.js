"use strict";
/* let hasDriverslicence = false;
const passTest = true;
if (passTest) {

   hasDriverlicence = true;

}
if (hasDriverslicence) {
   console.log("i can drive");
}



/////////////// FUNTIONS /////////////////////

function logger() {
    console.log(`my name is yashveer dalal`);
}
logger(); // calling / running / invoking  function
logger();


function fruitProcessor(apples, oranges) {

    const juice = (`your order with ${apples} apples   &  ${oranges} oranges ready`);
    return juice;

}
const Juice = fruitProcessor(4, 8);
console.log(Juice);
console.log(fruitProcessor(5, 0));

// function dec and function expression

function calcAge1(birthYear) { ///////////////////////////////////These are executed before any other code.
    const age = 2024 - birthYear;
    return age;

}
console.log(calcAge1(2004));

const calcAge2 = function (birthYear) {

    const age = 2024 - birthYear;
    return age;

}

console.log(calcAge2(2003));



////////////////////////////ARROW FUNCTION



const calcAge3 = birthYear => (2024 - birthYear);
console.log(calcAge3(2005));

const yearsUntilRetirement = (birthYear, retireAge, fistname) => {

    return `${fistname} will retire in ${retireAge - (2024 - birthYear)} years `

}
console.log(yearsUntilRetirement(65, 2004, `yashveer `));





////////////////FUNCTION CALLING another functions


function fruitCutter(fruit) {

    return fruit * 4;

}





function fruitProcessor(apples, oranges) {

    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);


    const juice = (`your order with ${applePieces} pieces of  apples   &  ${orangePieces} pieces of   oranges ready`);
    return juice;

}
console.log(fruitProcessor(2, 5))



//////// review  of Functions

const calculateAge = function (birthYear) {

    return (2024 - birthYear);
}


const yearsUntilRetirement = function (birthYear, retireAge, fistname) {

    const retire = retireAge - (calculateAge(birthYear));
    if (retire > 0) { return (`${fistname} will retire in ${retire}  years `) }

    else { return (`${fistname} already retired `); }





}
console.log(yearsUntilRetirement(1945, 65, `yashveer `));
console.log(yearsUntilRetirement(2004, 65, `harsh`));


///////////////// return statement cuts downs the function in one go


const friend1 = ` yassh`;
const friend2 = `deepanshu`; // no that much fun declaring like that
const friend3 = `shubham`;



let friends = [`yash`, `deepanshu`, `shubhamm`, `san`];
console.log(friends[0]);
console.log(friends);

let birthYear = new Array(2001, 1990, 2022, 2002);
console.log(birthYear[2] + 2);

console.log(friends.length);
console.log(friends.concat(birthYear));
console.log(friends.indexOf("san"));
friends.pop();
friends.push("shweta");
console.log(friends);
friends[2] = `nidhi`;
console.log(friends);




let firstNName = 'yash';
const arrayOfYash = new Array(firstNName, `dalal`, 2024 - 2003, friends);
console.log(arrayOfYash);
console.log(arrayOfYash.length);

//exercise

const calcAgeE = function (birthYear) {

    const age = 2024 - birthYear;
    return age;

}

const years = new Array(1990, 1968, 2002, 2010, 2018);


console.log(calcAgeE(years[3]));




///////////////////////////////////BUILT IN METHODS OF ARRAYS


const friendss = [`yash`, `deepanshu`, `harsh`, `rajat`, `sanyam`, `neha`];

const popped = friendss.pop();
console.log(popped);
(friendss.shift());
console.log(friendss);

console.log(friendss.indexOf("harsh"));
console.log(friendss.includes("harsh"));
console.log(friendss.includes("nidhi"));

// .includes with the conditional statement is a good to use way to get out of the peobs



// we can give a name or a key value to the elements in the array as we access the elements through the index so we need objects

const newFriendObject = { //object litral syntax

    firstname: "yash",
    lastname: "dalal",
    age: 2024 - 2004,
    job: "unemployed",
    newFriend: [
        `yash`,
        `nitin`,
        `kartik`,
        `ashish`,

    ]



}
console.log(newFriendObject);


const newYashObject = { //object litral syntax

    firstname: "yash",
    lastname: "dalal",
    age: 2024 - 2004,
    job: "unemployed",
    newFriend: [
        `yash`,
        `nitin`,
        `kartik`,
        `ashish`,

    ]
}



//console.log(newYashObject.firstname);
//console.log(newYashObject.newFriend);
//console.log(newYashObject[`lastname`]);
//console.log(newYashObject[`age`]);
//const middleName = `singh`;
//console.log(newYashObject.firstname + `${middleName}`);
//console.log(newYashObject[`firstname` + middleName]);

const propT = window.prompt("what do you want to know about me ?");

//console.log(newYashObject.propt) it will not provide any desired answer

if (newYashObject[propT]) {

    console.log(newYashObject[propT])

}
else {

    console.log("wromg req");

}

newYashObject.location = "karnal";
console.log(newYashObject);
newYashObject['favFoof'] = 'pizza';
console.log(newYashObject);

console.log(`harsh has ${newYashObject.newFriend.length} friends , and his bestfriend is ${newYashObject.newFriend[0]}`);


///////////////////////////////////////OBJECT METHODS

const yashveer = {
    firstName: "yashveer",
    lastName: "dalal",
    birthYear: 2003,
    friends: [`deepanshu`, `girish`, `akshit`],
    hasDriverLice: true,

    calcAge: function () {
        this.age = 2024 - this.birthYear; // Corrected calculation for current age
        return this.age;
    },
};



console.log(yashveer.calcAge()); // Call the function to calculate and log the age

console.log(`${yashveer.firstName} is a ${yashveer.calcAge()} years old useless guy and he ${yashveer.hasDriverLice ? "has a driver's license" : "does not have a driver's license"
  }`);




/////////////////////////////////LOOPS

// console.log(`lifiting weight rep 1 🏋🏻‍♀️`);
// console.log(`lifiting weight rep 2 🏋🏻‍♀️`);
// console.log(`lifiting weight rep 3 🏋🏻‍♀️`);
// console.log(`lifiting weight rep 4 🏋🏻‍♀️`);

for (let i = 1; i <= 10; i++) {
    console.log(`lifiting weight rep ${i} 🏋🏻‍♀️`);

}



// loop through array ;



const yashArray = [
    `yash`,
    `dalal`,
    19,
    `coder`,
    [`kartik`, `harsh`, `deepanshu`]
];
const types = [];
for (let i = 0; i < yashArray.length; i++) {
    console.log(yashArray[i], types.push(typeof yashArray[i]));

}

console.log(types);



let calcAge = function (birthYear) {

    return 2024 - birthYear;

}
let agee = [];

let birthYear = [2001, 2004, 2013, 2022]
for (let i = 0; i < birthYear.length; i++) {

    let age = calcAge(birthYear[i]);

    agee.push(age);



}
console.log(agee);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < number.length; i++) {
    if (number[i] == 5) continue;
    else {
        console.log(number[i]);
    }
}

let number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < number.length; i++) {
    if (number[i] == 5) break;
    else {
        console.log(number[i]);
    }
}



//inverse array looping //////////////////////

const yashArray2 = [
    `yash`,
    `dalal`,
    19,
    `coder`,
    [`kartik`, `harsh`, `deepanshu`]
];
for (let i = (yashArray2.length) - 1; i > -1; i--) {

    console.log(yashArray2[i]);
}

///loop inside loop 

for (let i = 1; i < 4; i++) {


    for (let j = 0; j < 5; j++) {
        switch (i) {
            case 1:
                console.log(`i am doing 🏋🏻`);
                break;

            case 2:
                console.log(`i am doing 🕺🏻 `);
                break;

            case 3:
                console.log(`i am doing 🏃‍♂️`);
                break;
        }
    }
    console.log(`starting exc ${i}`);
}

*/

////////////////////WHILE LOOP
let reps = 0;
while (reps < 10) {
  console.log(`i am doing this 🧑🏼‍💻`);
  reps++;
}
let firstName = window.prompt(`What is your name?`);

while (firstName === null || firstName === "") {
  firstName = window.prompt("Please enter a valid name");
}
console.log(firstName);
