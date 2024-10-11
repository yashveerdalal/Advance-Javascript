// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const meausreKelvin = function () {
//   const measure = {
//     type: `temp`,
//     unit: `celsius`,
//     value: prompt(`Degree Celeius :`),
//   };
//   console.table(measure);
//   const kelivn = Number(measure.value) + 273;
//   return kelivn;
// };

// console.log(meausreKelvin());

// const x = 5;
// if (x === `5`) {
//   console.log("okay");
// }

// let array = [1, 3, 6, 4, 9, 8];
// let min = 0;

// debugger;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }
// }
// console.log(min);

const data = [17, 21, 23];
const data2 = [12, 5, -5, 0, 417];
let b = "";

const printTemp = function (array) {
  for (let i = 0; i < array.length; i++) {
    let a = `temp was ${array[i]} ☀︎ on day ${i + 1} ...`;
    b = a + b;
  }
  console.log(b);
};

printTemp(data);
