function navToggle() {
  var navToggleNav = document.getElementById("nav");
  navToggleNav.classList.toggle("_active");
  var html = document.getElementById("html");
  html.classList.toggle("_overflow");
  var body = document.getElementById("body");
  body.classList.toggle("_overflow");
}
function navClose() {
  var navToggleNav = document.getElementById("nav");
  navToggleNav.classList.remove("_active");
  var html = document.getElementById("html");
  html.classList.remove("_overflow");
  var body = document.getElementById("body");
  body.classList.remove("_overflow");
}
