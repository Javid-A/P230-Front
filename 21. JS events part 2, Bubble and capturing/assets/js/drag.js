let items = document.querySelectorAll(".item");
let dropZones = document.querySelectorAll(".dropZone");

items.forEach((item) => {
  //   item.addEventListener("drag", function () {
  //     console.log("drag event");
  //   });
  //   item.addEventListener("dragstart", function () {
  //     console.log("Drag started");
  //   });
  //   item.addEventListener("dragend", function () {
  //     console.log("Drag finished");
  //   });

  item.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("id", e.target.id);
    console.log(e.target);
    console.log(e.target.id);
  });
});

dropZones.forEach((zone) => {
  //   zone.addEventListener("dragenter", function () {
  //     console.log("drag enter");
  //   });
  //   zone.addEventListener("dragleave", function () {
  //     console.log("drag leave");
  //   });
  zone.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  zone.addEventListener("drop", function (e) {
    let id = e.dataTransfer.getData("id");
    let draggableElement = document.getElementById(id);
    let ul = this.children[1];
    ul.appendChild(draggableElement);
  });
});
