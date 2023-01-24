// window.navigator.geolocation.getCurrentPosition(
//   (a) => {
//     console.log(a.coords.latitude);
//   },
//   (event) => {
//     window.location.href = "https://www.google.com";
//   }
// );

// setTimeout(() => {
//   document.write("okay");
// }, 1000);

// let count = 0;
// setInterval(() => {
//   document.body.firstChild.remove();
//   document.write(++count);
// }, 1000);

//HTML Collections
// let headings = Array.from(document.getElementsByTagName("h1"));
// let headingsCollection = document
//   .getElementsByClassName("title")//HTML Collection==>namedItem
//   .namedItem("text");
// let heading = document.getElementById("text"); //this is not html collection
// let headings = Array.from(headingsCollection);
// console.log(headingsCollection);

// heading.style.color = "blue";

// headings.forEach((element) => {
//   let red = "#aaffaa";
//   console.log((element.style.color = red));
// });

//NodeList

// let heading = document.querySelector("#text");
// let headings = document.querySelectorAll("[class*='title']");

// // console.log(headings);

// headings.forEach((heading, index) => {
//   if (index % 2 == 0) {
//     heading.style.color = "red";
//   }
// });

let h1 = document.createElement("h1");
let ul = document.createElement("ul");
let li = document.createElement("li");
let inp = document.createElement("input");
let inp2 = document.createElement("input");

console.log(h1);
console.log(ul);
console.log(li);
console.log(inp);
h1.className = "title";
h1.id = "text";

inp.type = "text";
inp.placeholder = "Type your firstname";

inp2.type = "password";
inp2.placeholder = "Type your password";

h1.setAttribute("custom-p230", "P230Students");

// console.log(h1.getAttribute("custom-p230"));

// // h1.className = "info";
// h1.classList.add("info");
// h1.classList.add("p230");

// h1.classList.remove("p230");
// h1.classList.toggle("p230");
// h1.classList.toggle("title");
let business = document.getElementById("Business");

let append = business.append(h1, ul, "okay", "test");
ul.append(li);
// business.prepend(inp);

// business.insertBefore(inp, ul);

let appendChild = business.appendChild(inp2);

console.log(appendChild);
console.log(append);
h1.innerText = "Hello P230";
li.innerHTML = "<b>Rashid</b>";
