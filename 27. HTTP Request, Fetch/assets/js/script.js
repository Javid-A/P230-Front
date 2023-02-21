// function SendRequest() {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status >= 200 && this.status < 300) {
//       text.innerText = this.response;
//     } else if (this.status === 404) {
//       text.innerText = "Error, 404 Not Found";
//       text.style.color = "red";
//     }
//   };
//   xhr.open("GET", "dasdfsdfta.txt"); //GET, POST, PUT, PATCH, DELETE
//   //   xhr.open("GET", "https://dummyjson.com/products/1");
//   xhr.send();
// }
// let text = document.getElementById("text");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", SendRequest);
let requestBtn = document.querySelector("#btn");
let products = document.querySelector(".pros");
requestBtn.addEventListener("click", SendRequestFetch);
function SendRequestFetch() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      let productDesign = ``;
      data.products.forEach((product) => {
        let title =
          product.title.length > 10
            ? product.title.substring(0, 10) + "..."
            : product.title;
        let description =
          product.description.length > 20
            ? product.description.substring(0, 20) + "..."
            : product.description;
        productDesign += `<div class="col-lg-3">
        <div class="card">
            <div class="d-flex justify-content-center"><img class="card-img-top image" src="${product.thumbnail}" alt="Card image cap"></div>
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">Price: ${product.price}$</p>
                <p class="card-text">Discount price: ${product.discountPercentage}$</p>
                <p class="card-text">${product.brand}</p>
                <a href="${product.images[0]}" class="btn btn-primary">Go another image</a>
            </div>
        </div>
    </div>`;
      });
      products.innerHTML += productDesign;
    })
    .catch((err) => console.log(err.message));
}
