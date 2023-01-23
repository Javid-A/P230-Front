let names = "Albert, Kamran, Ulviyya, Albert, Mehrac";

// let firstname = names.slice(-15, -9);

// let firstname = names.substr(8, 6);

// console.log(names.length);
// console.log(firstname);

// let newNames = names.replace(/albert/gi, "Rashid");
// console.log(newNames);

// var str = String.fromCharCode(72, 104, 69);
// console.log(str);

// JS objects

// let PERSON_AGE_KEY = "age";
// let person = {
//   firstname: "Mehrac",
//   surname: "Mammadov",
//   [PERSON_AGE_KEY]: 26,
//   getFullname: function () {
//     return `${this.firstname} ${this.surname}`;
//   },
//   getInfo() {
//     return `${this.firstname} ${this.surname} ${this.age}`;
//   },
//   getAge: () => {
//     return `${person.age}`;
//   },
// };

// let person2 = {};

// person.groupNo = "P230";
// let Person_Key = "nickname";

// // person[Person_Key] = "MehracAli";

// // person[PERSON_AGE_KEY] = 26;

// Object.defineProperty(person, "password", { value: "123456", writable: true });

// person.password = "654321";

// console.log(person.getFullname());
// console.log(person.getInfo);
// console.log(person.getAge());

//Function constructor

// function Person(firstname, surname, age) {
//   this.firstname = firstname;
//   this.surname = surname;
//   this.age = age;
//   this.getInfo = function () {
//     return `${this.firstname} ${this.surname} ${this.age}`;
//   };
// }

// let person = new Person("Jamil", "Isayev", 23);
// console.log(person);

// function Student(groupNo) {
//   this.groupNo = groupNo;
// }

// Student.prototype = new Person("Jamil", "Isayev", 23);
// Student.prototype.profession = "Programming";
// let student = new Student("P230");
// let student1 = new Student("P232");

// Object.setPrototypeOf(student, new Person("Jamil", "Isayev", 23));
// Object.setPrototypeOf(student1, new Person("Mehrac", "Mammadov", 26));
// console.log(student);
// console.log(student1);

let user = {
  username: "soulfly",
  password: 12345678,
};

// let user2 = Object.assign({}, user);
// let user2 = Object.assign(user); wrong

// user2.password = 123;

// let user2 = { ...user }; spread syntax

// user2.password = 1234;

// let user2Str = JSON.stringify(user);
// let user2 = JSON.parse(user2Str);
// user2.password = 123;
// console.log(user);
// console.log(user2);

// +"400" + +"400"
