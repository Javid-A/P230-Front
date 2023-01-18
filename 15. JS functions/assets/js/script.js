// function Sum(num1, num2) {
//   let total = num1 + num2;
//   console.log(total);
// }

// let result = Sum(5, 12, 15);

// console.log(result);

function Total(num1, num2) {
  return num1 + num2;
}

function FirstEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 == 0) {
      return element;
    }
  }
}

let array = [1, 3, 5, 7, 91, 121, 141, 161];

// console.log(FirstEven(array));

// function Fullname(name, surname) {
//   //   return name + " " + surname;
//   return `${name} ${surname}`;
// }

// console.log(Fullname("Jamil", "Isayev"));

// let max = Math.max(1, 5, 10, 122, 2, 4, 20, 33, 30, 40, 45, 50, 60);

// function CustomMax() {
//   let max = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     const element = arguments[i];
//     if (max < element) {
//       max = element;
//     }
//   }
//   return max;
// }

// let customMax = CustomMax(1, 5, 10, 2, 4, 20, 33, 30, 40, 45, 122, 50, 60, 122);
// console.log(max);
// console.log(customMax);

// function SomeProcess(arr, callBack, number) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (callBack(element, number)) {
//       console.log(element);
//     }
//   }
// }

// function IsGreaterThan(a, b) {
//   return a > b;
// }

// function IsDividable(d, e) {
//   return d % e == 0;
// }

// function IsSmallerThan(j, y) {
//   return j < y;
// }

// SomeProcess([1, 2, 3, 5, 7, 11, 12, 15, 20, 100, 200], IsGreaterThan,13);
// SomeProcess([1, 2, 3, 5, 7, 11, 12, 15, 20, 100, 200], IsDividable,2);
// SomeProcess([1, 2, 3, 5, 7, 11, 12, 15, 20, 100, 200], IsSmallerThan, 50);
// console.log(arrFunc());

let arrFunc = () => {
  let total = 5 + 5;
  console.log(total);
};

let number = 5;

let person = {
  firstname: "Narmin",
  surname: "Abdullayeva",
  age: 22,
  getFullname: function () {
    return `${this.firstname} ${this.surname}`;
  }, // dede baba functionu
  getInfo: () => {
    // return `${this.firstname} ${this.surname} ${this.age}`;
    return this;
  }, //arrow function
};

console.log(person.getFullname());
console.log(person.getInfo());
