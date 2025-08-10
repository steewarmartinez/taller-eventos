const div = document.getElementsByClassName("container")[0];
const btn = div.querySelector("button");

div.addEventListener("click", function () {
  alert("Hola! Soy el div");
});

btn.addEventListener("click", function (event) {
  event.stopPropagation();
  alert("Hola!");
});
