
$(document).ready(function () {
  // sticky navbar animation
  $(".js--section-about-us").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  //   scroll to plans contact us animation
  $(".js--section-contact-us").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-contact-us").offset().top },
      500
    );
  });

  //   scroll to gallery section animation
  $(".js--section-gallery").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-gallery").offset().top },
      500
    );
  });

  //   animations on scroll
  //  services fade-in
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  // mobile nav
  $(".js--nav-icon").click(function () {
    const nav = $(".js--main-nav");
    const icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    }
  });
});
