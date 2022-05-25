const Main = document.querySelector("#main");
let barCode = document.querySelector(".barcode");
let tag = document.querySelector(".tag");

function clickBarCode() {
  Main.classList.toggle("active");
  tag.classList.toggle("active");
}

barCode.addEventListener("click", clickBarCode);
