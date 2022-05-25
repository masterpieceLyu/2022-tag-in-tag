const Main = document.querySelector("#main");
const HiddenContainer = document.querySelector(".tag-hidden_container");
let barCode = document.querySelector(".barcode");
let tag = document.querySelector(".tag");
let pitAndTitle = document.querySelector(".tag-pitAndTitle");
let paragraphInMainTag = document.querySelector(".tag-paragraph");

function clickBarCode() {
  Main.classList.toggle("active");
  HiddenContainer.classList.toggle("active");
  tag.classList.toggle("active");
  pitAndTitle.classList.toggle("active");
  paragraphInMainTag.classList.toggle("active");
  barCode.classList.toggle("active");
}

barCode.addEventListener("click", clickBarCode);
