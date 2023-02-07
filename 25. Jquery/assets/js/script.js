// $(document).ready(function () {
//   $("p").click(function () {
//     // let element = $(this); //[1ci element] [2-ci element]
//     // element[0].style.display = "none";
//     $(this).hide();
//   });
// });

// let paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);

// document.addEventListener("DOMContentLoaded", function () {
//   paragraphs.forEach((p) => {
//     p.onclick = function () {
//       p.style.display = "none";
//     };
//   });
// });

// let p = document.querySelector("p");

// if (p) {
//   p.onclick = function () {
//     this.style.display = "none";
//   };
// }

//#region Basket for Albert
// let count = 1;
// let addBtn = document.querySelectorAll(".btn-success");
// addBtn.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     let id = this.parentElement.getAttribute("data-id");
//     let basketItems = document.querySelectorAll(".basket-item");
//     basketItems.forEach((item) => {
//       let basketId = item.getAttribute("data-id");
//       if (id == basketId) {
//         item.querySelector(".count").innerText = ++count;
//       } else {
//       }
//     });
//   });
// });
//#endregion

$(document).ready(function () {
  //   $(".show").click(function () {
  //     $(".avatar").show("slow");
  //   });
  //   $(".hide").click(function () {
  //     $(".avatar").hide(100);
  //   });
  //   $(".toggle").click(function () {
  //     $(".avatar").toggle(3000, function () {
  //       $(".toggle").hide();
  //     });
  //   });
  //Fade
  //   $(".show").click(function () {
  //     $(".avatar").fadeIn("slow");
  //   });
  //   $(".hide").click(function () {
  //     $(".avatar").fadeOut(2000);
  //   });
  //   $(".toggle").click(function () {
  //     $(".avatar").fadeToggle(200);
  //   });
  //   $(".fadeTo").click(function () {
  //     $(".avatar").fadeTo(2000, 0.5);
  //   });

  // $(".slideDown").on("click", function () {
  //   $(".items").slideDown();
  // });
  // $(".slideUp").on("click", function () {
  //   $(".items").slideUp();
  // });

  // $(".animate").on("click", function () {
  //   $(".items").animate({ backgroundColor: "blue" });
  // });

  let style = {
    color: "red",
    border: "1px solid black",
  };
  $("button").click(function () {
    var $x = $("p");
    $x.prop("color", "green");
    $x.append(" Property is color and its value: " + $x.prop("color"));

    $x.css({ color: $x.prop("color") });
    $x.css(style);
  });

  $("p").html("<b>Test</b>");
  console.log($("p").html());
});
