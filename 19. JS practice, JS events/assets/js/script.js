// const logo = document.querySelector(".logo");

// logo.onclick = function () {
//   let img = document.querySelector("#logo");
//   let attributeData = img.getAttribute("data-info");
//   if (attributeData == "google") {
//     // logo.style.backgroundColor = "rgba(255, 37, 37, 0.348)";
//     img.setAttribute("data-info", "youtube");
//     img.className = "opacity";
//     let src =
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png";
//     setTimeout(() => {
//       img.src = src;
//       img.className = "";
//     }, 1000);
//     logo.className = "logo youtube";
//   } else {
//     // logo.style.backgroundColor = "rgba(21, 191, 21, 0.342)";
//     img.setAttribute("data-info", "google");
//     img.classList.add("opacity");
//     setTimeout(() => {
//       img.src =
//         "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227";
//       img.classList.remove("opacity");
//     }, 1000);

//     logo.className = "logo google";
//   }
// };

let buttons = document.querySelectorAll(".colorBtn");
let boxes = document.querySelectorAll(".box");
let lastbox;

buttons.forEach((btn) => {
  btn.onclick = function () {
    // boxes.forEach((box) => {
    //   box.style.backgroundColor = "transparent";
    // });

    let colorId = this.getAttribute("data-id"); // red, orange, pink, green
    let box = document.getElementById(colorId);
    box.style.backgroundColor = colorId;
    lastbox ? (lastbox.style.backgroundColor = "transparent") : undefined;
    lastbox = box;
  };
});
