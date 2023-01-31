let input = document.getElementById("color");
let button = document.getElementById("set");
let item = document.querySelector(".item");
let dropZone = document.querySelector(".dropZone");

button.addEventListener("click", function () {
  item.style.backgroundColor = `rgb(${input.value})`;
});
item.addEventListener("dragstart", function (e) {
  let colorArray = input.value.split(",");
  let [red, green, blue] = colorArray; //[100,200,300]
  //   let re =colorArray[0];
  //   let gree =colorArray[1];
  //   let blu =colorArray[2];
  let rgb = { red, green, blue };
  e.dataTransfer.setData("color", JSON.stringify(rgb));
});

dropZone.addEventListener("dragover", function (e) {
  e.preventDefault();
});
let lastColorArray;
dropZone.addEventListener("drop", function (e) {
  let rgbStr = e.dataTransfer.getData("color");
  let rgb = JSON.parse(rgbStr);

  let { red, green, blue } = rgb;
  let redN = parseInt(red);
  let greenN = parseInt(green);
  let blueN = parseInt(blue);

  if (!this.style.backgroundColor) {
    this.style.backgroundColor = `rgb(${redN},${greenN},${blueN})`;
  } else {
    let bgStr = this.style.backgroundColor; //rgb(200, 10, 100)
    let lastBgStr = bgStr.slice(4, bgStr.length - 1); //"200, 10, 100"
    lastColorArray = lastBgStr.split(", "); //[200,10,100]
    let [lastRedStr, lastGreenStr, lastBlueStr] = lastColorArray;
    let lastRed = parseInt(lastRedStr);
    let lastGreen = parseInt(lastGreenStr);
    let lastBlue = parseInt(lastBlueStr);
    this.style.backgroundColor = `rgb(${(redN + lastRed) / 2},${
      (greenN + lastGreen) / 2
    },${((blueN + lastBlue) / 2).toFixed()})`;
  }
  //rgb(200,100,100)
});
