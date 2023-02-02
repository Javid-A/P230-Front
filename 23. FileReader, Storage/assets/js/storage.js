// sessionStorage.setItem("product", "S22 ULTRA");

// sessionStorage.setItem("count", 1);

// let numStr = sessionStorage.getItem("count");
// let num = parseInt(numStr);
// sessionStorage.setItem("count", ++num);

// sessionStorage.clear();

let modeBtn = document.getElementById("mode");

document.addEventListener("DOMContentLoaded", function () {
  let mode = localStorage.getItem("mode");
  if (mode == "dark") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

modeBtn.addEventListener("click", function () {
  let mode = localStorage.getItem("mode");
  if (mode == "dark") {
    document.body.style.backgroundColor = "white";
    localStorage.setItem("mode", "light");
  } else {
    document.body.style.backgroundColor = "black";
    localStorage.setItem("mode", "dark");
  }
});
