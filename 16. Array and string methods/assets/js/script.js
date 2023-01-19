// let numberStr = prompt("Please enter valid number");
// let number = parseInt(numberStr);
// //64,32,16,8,4,2,1
// //60,30,15,7.5,3.25,1,625,0.8
// while (number > 1) {
//   number /= 2;
// }

// if (number == 1) {
//   console.log("Quvvetidir");
// } else {
//   console.log("Quvveti deyil");
// }

//9235 ==> 5923
// function Change(number) {
//   let copy = number;
//   let remainder = number % 10;
//   let leftSide = (number - remainder) / 10;
//   while (number > 10) {
//     number /= 10;
//     remainder *= 10;
//   }
//   let result = remainder + leftSide;
//   console.log(copy);
//   console.log(result);
// }

// Change(874);

// function ArrayGenerator(num1, num2) {
//   let arr = [];
//   let index = 0;
//   for (let i = num1 + 1; i < num2; i++) {
//     arr[index++] = i;
//   }
//   return arr;
// }

// let arr = ArrayGenerator(200, 300);

// for (const number of arr) {
//   console.log(number);
// }

let arr = [
  1,
  null,
  2,
  3,
  4,
  5,
  undefined,
  6,
  { name: "Kamran" },
  7,
  8,
  9,
  "Jamil",
];

arr.forEach((value, index, array) => {
  // array[index] = value + 15;
  value += 15;
  // console.log(value);
});

// console.log(value);

// arr.forEach((value) => {
//   console.log(value);
// });
//let newArr = [1+5,2+5,null+5,undefined+5]
// let newArr = arr.map((value, index, array) => {
//   return (value += 5);
// });

// console.log(newArr);
// console.log(arr);

// let newArr = arr.filter((value, index, array) => {
//   return value >= 3;
// });

let students = [
  { name: "Ulvi", age: 30 },
  { name: "Rashid", age: 25 },
];

// let numbers = arr.filter(Boolean);

// let grannyStudents = students.filter((value) => {
//   return value.age > 25;
// });
// console.log(grannyStudents);

let averageAge = students.reduce(CallBackReduce, 0);

function CallBackReduce(total, value) {
  total += value.age / 2;
  return total;
}

let resultEvery = students.every((value) => {
  return value.age > 27;
});

let resultSome = students.some((value) => {
  return value.age > 27;
});

console.log(resultSome);
