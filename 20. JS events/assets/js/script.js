// let form = document.getElementById("registration");

// form.onsubmit = function (event) {
//   event.preventDefault();
//   let firstname = document.querySelector("[placeholder*=firstname]");
//   let result = true;
//   if (firstname.value.length < 3) {
//     firstname.nextElementSibling.classList.remove("d-none");
//     result = false;
//   } else {
//     firstname.nextElementSibling.classList.add("d-none");
//   }

//   let lastname = document.querySelector("[placeholder*=lastname]");

//   if (lastname.value.length < 3) {
//     result = false;
//     lastname.nextElementSibling.classList.remove("d-none");
//     // return;
//   } else {
//     lastname.nextElementSibling.classList.add("d-none");
//   }
//   let email = document.querySelector("[placeholder*=email]");

//   if (!email.value.includes("@")) {
//     result = false;
//     email.nextElementSibling.classList.remove("d-none");
//     // return;
//   } else {
//     email.nextElementSibling.classList.add("d-none");
//   }

//   let pw = document.querySelector("[placeholder*=password]");

//   if (pw.value.length < 8) {
//     result = false;
//     pw.nextElementSibling.classList.remove("d-none");
//     // return;
//   } else {
//     pw.nextElementSibling.classList.add("d-none");
//   }
//   if (result) {
//     location.href = "https://www.google.com";
//   }
// };

let box = document.querySelector(".box");

// console.log(box.parentElement.nextElementSibling.append("Goodbye P230"));
// console.log(
//   (box.children.item(1).innerHTML = "<strong style='color:red'>Test</strong>")
// );

// console.log(box.previousElementSibling);

// box.onclick = () => {
//   console.log("test");
// };
// box.ondblclick = () => {
//   console.log("test");
// };

// box.onmousedown = () => {
//   console.log("test");
// };

// box.onmouseup = () => {
//   console.log("test");
// };

// box.addEventListener("click", () => {
//   console.log("click");
// });

// box.addEventListener("mouseup", () => {
//   console.log("mouse up");
// });

// box.onmousemove = function () {
//   console.log("move");
// };

// box.onmouseout = function () {
//   console.log("out");
//   this.style.boxShadow = "";
// };

// box.onmouseover = function () {
//   console.log("out");
//   this.style.boxShadow = "0px 0px 4px 2px black";
// };

// box.onwheel = function (e) {
//   console.log(e);
// };
let menuSize = false;
let lastContext;
window.oncontextmenu = function (event) /*Event object*/ {
  event.preventDefault();
  let div = document.createElement("div");
  lastContext ? lastContext.remove() : "null";
  div.className = "context";
  div.style.width = "150px";
  div.style.height = "300px";
  div.style.backgroundColor = "blue";
  div.style.position = "fixed";
  div.style.top = `${event.clientY}px`;
  div.style.left = `${event.clientX}px`;
  console.log(window.outerWidth);
  console.log(window.innerWidth);
  console.log(event.clientX);
  if (window.innerWidth - 15 - event.clientX < 150) {
    div.classList.add("translate");
  }
  document.body.prepend(div);
  lastContext = div;
};

// window.onclick = function () {
//   lastContext ? lastContext.remove() : "null";
// };

let inp = document.getElementById("inp");

inp.onkeydown = function (event) {
  if (event.keyCode === 13) {
    alert("you entered the enter");
  }
};
