document.addEventListener("DOMContentLoaded", function () {
  const navigationItems = document.querySelectorAll("li a");

  navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navigationItems.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
});
