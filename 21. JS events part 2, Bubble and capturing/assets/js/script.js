// let students = document.getElementById("students");

// let file = document.getElementById("file");

// file.onchange = function () {
//   console.log(this);
// };
// students.onchange = function () {
//   alert(this.value);
// };

// let primary = document.getElementById("primary");
// let danger = document.getElementById("danger");

// primary.onclick = function () {
//   //   alert("Primary");
//   danger.click();
// };

// danger.onclick = function () {
//   alert("Danger");
// };

// let img = document.querySelector("img");

// img.onclick = function () {
//   this.nextElementSibling.click();
// };

let button = document.querySelector(".btn");
let row = document.querySelector(".row");
let container = document.querySelector(".container");

// button.onclick = function () {
//   console.log("first click");
// };

// button.onclick = function () {
//   console.log("second click");
// };

// button.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// row.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// button.addEventListener(
//   "click",
//   function (e) {
//     console.log("button clicked");
//     // e.stopPropagation();
//   },
//   true
// );

// container.addEventListener(
//   "click",
//   function () {
//     console.log("container clicked");
//   },
//   true
// );

// row.addEventListener(
//   "click",
//   function (e) {
//     console.log("row clicked");
//     // e.stopPropagation();
//   },
//   true
// );

// let lastContext;
// let div;
// document.body.oncontextmenu = function (event) /*Event object*/ {
//   event.preventDefault();
//   div = document.createElement("div");
//   lastContext ? lastContext.remove() : "null";
//   div.className = "context";
//   div.style.width = "150px";
//   div.style.height = "300px";
//   div.style.backgroundColor = "blue";
//   div.style.position = "fixed";
//   div.style.top = `${event.clientY}px`;
//   div.style.left = `${event.clientX}px`;
//   div.onclick = function (e) {
//     e.stopPropagation();
//   };
//   console.log(window.outerWidth);
//   console.log(window.innerWidth);
//   console.log(event.clientX);
//   // if (window.innerWidth - 15 - event.clientX < 150) {
//   //   div.classList.add("translate");
//   // }
//   document.body.prepend(div);
//   lastContext = div;
// };

// document.body.onclick = function () {
//   lastContext ? lastContext.remove() : "null";
// };

// button.onclick = function () {
//   console.log("first");
// };

// button.oncontextmenu = function (e) {
//   e.preventDefault();
//   console.log("context");
// };
