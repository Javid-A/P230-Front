$(document).ready(function () {
  AOS.init();
  $(".accordion-header").on("click", function () {
    let next = $(this).next();
    let icon = $(this).find("i");

    next.slideToggle();
    icon.toggleClass("active");

    $(".accordion-article").not(next).slideUp();
    $(".accordion-header i").not(icon).removeClass("active");
  });

  $(".item").on("click", function () {
    $(this).addClass("animate__jello");
    setTimeout(() => {
      $(this).removeClass("animate__jello");
    }, 200);
  });

  setInterval(function () {
    $(".item").addClass("animate__lightSpeedInRight");
    setTimeout(() => {
      $(".item").removeClass("animate__lightSpeedInRight");
    }, 1500);
  }, 1550);

  $("#test1").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    lazyLoad: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
});
