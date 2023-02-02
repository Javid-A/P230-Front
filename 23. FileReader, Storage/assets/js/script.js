let fileInput = document.getElementById("file");
let images = document.querySelector(".images");

fileInput.addEventListener("change", function (e) {
  let files = Array.from(e.target.files);
  files.forEach((file) => {
    ShowImage(file);
  });
});

function ShowImage(file) {
  if (!file.type.includes("image/")) {
    alert("Please choose image format");
    return;
  }
  if (file.size / 1024 / 1024 > 10) {
    alert("Maximum size have to be 1 MB");
    return;
  }

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener("loadend", function () {
    let src = fileReader.result;
    let image = document.createElement("div");
    let closeButton = document.createElement("button");
    closeButton.className = "btn btn-danger";
    closeButton.innerText = "X";
    closeButton.style.position = "absolute";
    closeButton.style.right = "0px";
    closeButton.addEventListener("click", function () {
      let result = confirm("Are you sure to delete this photo?");
      if (result) {
        image.remove();
      }
    });
    image.style.position = "relative";
    image.style.width = "150px";
    image.style.height = "150px";
    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "contain";
    img.src = src;
    image.append(img);
    image.append(closeButton);
    images.appendChild(image);
  });
}
