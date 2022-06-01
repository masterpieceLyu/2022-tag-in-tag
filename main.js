const HTML = document.querySelector("html");
const Main = document.querySelector("#main");
const HiddenContainer = document.querySelector(".tag-hidden_container");
let tagSection = document.querySelectorAll(".tag-section");
let barCode = document.querySelector(".barcode");
let tag = document.querySelector(".tag");
let pit = document.querySelector(".pit");
let title = document.querySelector(".title");
let pitAndTitle = document.querySelector(".tag-pitAndTitle");
let paragraphInMainTag = document.querySelector(".tag-paragraph");
let hiddenTitle = document.querySelector(".title-hidden");

// Main Grow //
// Main Grow //
// Main Grow //
function clickBarCode() {
  Main.classList.toggle("active");
  HiddenContainer.classList.toggle("active");
  tag.classList.toggle("active");
  tagSection[1].classList.toggle("active");
  tagSection[2].classList.toggle("active");
  tagSection[3].classList.toggle("active");
  pitAndTitle.classList.toggle("active");
  paragraphInMainTag.classList.toggle("active");
  barCode.classList.toggle("active");
  pit.classList.toggle("active");
  title.classList.toggle("active");
  hiddenTitle.classList.toggle("active");
}
barCode.addEventListener("click", clickBarCode);

// Section Scroll Setup //
// Section Scroll Setup //
// Section Scroll Setup //
addEventListener("scroll", function () {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  if (absoluteTop1 > 0) {
    HTML.classList.remove("snap");
  }
});
// section 1
addEventListener("scroll", function () {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  if (absoluteTop1 <= 0 && absoluteTop2 > 0) {
    tagSection[1].classList.remove("apear");
    tagSection[2].classList.remove("apear");
    tagSection[3].classList.remove("apear");
  }
});
// section 2
addEventListener("scroll", function () {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  if (absoluteTop1 <= (absoluteTop2 - absoluteTop1) / 2) {
    HTML.classList.add("snap");
    tagSection[1].classList.add("apear");
    tagSection[2].classList.remove("apear");
    tagSection[3].classList.remove("apear");
  }
});
// section 3
addEventListener("scroll", function () {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  if (absoluteTop3 <= (absoluteTop2 - absoluteTop1) / 2) {
    HTML.classList.add("snap");
    tagSection[1].classList.remove("apear");
    tagSection[2].classList.add("apear");
    tagSection[3].classList.remove("apear");
  }
});
// section 4
addEventListener("scroll", function () {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  if (absoluteTop4 <= (absoluteTop4 - absoluteTop3) / 2) {
    tagSection[1].classList.remove("apear");
    tagSection[2].classList.remove("apear");
    tagSection[3].classList.add("apear");
  }
});
