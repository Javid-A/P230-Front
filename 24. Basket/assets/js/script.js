let titles = document.querySelectorAll(".title");
let basketHTML = document.querySelector("#Basket .basket");
document.addEventListener("DOMContentLoaded", function () {
  let basketStr = localStorage.getItem("basket"); //"[]"
  let basket = JSON.parse(basketStr); //[]

  if (!basket || !basket.length) {
    localStorage.setItem("basket", JSON.stringify([]));
  } else {
    ShowProductCount(basket);
    ShowTotalPrice(basket);
  }
});

titles.forEach((title) => {
  if (title.innerText.length > 15) {
    title.setAttribute("data-title", title.innerText);
    title.innerText = title.innerText.substring(0, 15) + "...";
  }
});

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      localStorage.setItem("basket", JSON.stringify([]));
      basket = JSON.parse(localStorage.getItem("basket"));
    }
    let product = GetProductDatas(this);
    let existedProduct = basket.find((pro) => {
      return pro.id == product.id;
    });
    if (!existedProduct) {
      basket.push(product);
    } else {
      existedProduct.count++;
    }
    ShowProductCount(basket);
    ShowTotalPrice(basket);
    AddToBasket(product);

    // console.log(basket);
    let basketStr = JSON.stringify(basket);
    localStorage.setItem("basket", basketStr);
  });
});

function GetProductDatas(product) {
  let parent = product.parentElement.parentElement.parentElement;
  let id = parent.getAttribute("data-id");
  let price = parent.querySelector(".price").innerText;
  let title = parent.querySelector(".title").getAttribute("data-title");
  let desc = parent.querySelector("p").innerText;
  let src = parent.querySelector("img").src;
  let result = { id, price, title, desc, src, count: 1 };
  return result;
}

function ShowProductCount(basket) {
  let basketCount = document.querySelector(".basket-count");
  basketCount.innerText = basket.reduce((total, product) => {
    return (total += product.count);
  }, 0);
}

function ShowTotalPrice(basket) {
  let total = document.querySelector(".total-price");
  total.innerText = basket.reduce((total, product) => {
    return (total += parseInt(product.price * product.count));
  }, 0);
}

function AddToBasket(product) {
  let baskets = document.querySelector(".basket");
  let div = document.createElement("div");
  let image = document.createElement("img");
  let price = document.createElement("span");
  let closeBtn = document.createElement("button");

  console.log(baskets);
  closeBtn.className = "btn btn-danger";
  closeBtn.innerText = "X";
  closeBtn.style.position = "absolute";
  closeBtn.style.right = "10px";
  div.className = "basket-item col-lg-2";
  div.style.position = "relative";
  div.setAttribute("data-id", product.id);
  image.src = product.src;
  image.style.width = "100px";
  price.innerText = product.price;
  div.append(image, price, closeBtn);
  basketHTML.append(div);
  closeBtn.addEventListener("click", function () {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      localStorage.setItem("basket", JSON.stringify([]));
      basket = JSON.parse(localStorage.getItem("basket"));
    }
    let id = this.parentElement.getAttribute("data-id");
    let index = basket.findIndex((element) => {
      return element.id == id;
    });

    delete basket[index];
    basket = basket.filter(Object);
    ShowProductCount(basket);
    ShowTotalPrice(basket);
    let basketStr = JSON.stringify(basket);
    localStorage.setItem("basket", basketStr);
    this.parentElement.remove();
  });
}

// let deletes = document.querySelector(".delete");
// let testBasket = [
//   { id: 1, title: "test1" },
//   { id: 2, title: "test2" },
//   { id: 3, title: "test3" },
//   { id: 4, title: "test4" },
// ];

// console.log(testBasket);
// deletes.addEventListener("click", function () {
//   let id = 3;

//   let index = testBasket.findIndex((element) => {
//     return element.id == id;
//   });
//   delete testBasket[index];
//   testBasket = testBasket.filter(Object);
//   console.log(testBasket);
// });
