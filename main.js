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

// section 1
addEventListener("scroll", function () {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  if (absoluteTop1 < 0 && absoluteTop2 > 0) {
    HTML.classList.add("snap");
  }
});
// section 2
addEventListener("scroll", function () {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  let section2span = document.querySelector(".section2span");
  let section2contents = document.querySelectorAll(".section2contents");
  let boxLine = document.querySelectorAll(".box-line");

  if (absoluteTop1 <= (absoluteTop2 - absoluteTop1) / 2) {
    HTML.classList.add("snap");
    section2span.style.animation = "slideText 0.8s 0.8s ease-in-out forwards";
    section2contents[0].style.animation =
      "slideContents 1.1s 2.3s ease-out forwards";
    section2contents[1].style.animation =
      "slideContents 1.1s 2.7s ease-out forwards";
    section2contents[2].style.animation =
      "slideContents 1.1s 3s ease-out forwards";
    section2contents[3].style.animation =
      "slideContents 1.1s 3.3s ease-out forwards";
    boxLine[0].style.animation =
      "box1Apear 0.5s 1.5s cubic-bezier(0.85, 0, 0.15, 1) forwards";
    boxLine[1].style.animation =
      "box2Apear 0.5s 1.7s cubic-bezier(0.85, 0, 0.15, 1) forwards";
  }
});
// section 3
addEventListener("scroll", function section3() {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  let section3span = document.querySelector(".section3span");
  let section3contents = document.querySelectorAll(".section3contents");
  let boxLine = document.querySelectorAll(".box-line");

  if (absoluteTop3 <= (absoluteTop2 - absoluteTop1) / 2) {
    HTML.classList.add("snap");

    section3span.style.animation = "slideText 0.8s 0.8s ease-in-out forwards";
    // section3contents[0].style.animation =
    //   "slideContents 1.3s 1.5s ease-out forwards";
    // section3contents[1].style.animation =
    //   "slideContents 1.3s 1.8s ease-out forwards";
    // section3contents[2].style.animation =
    //   "slideContents 1.3s 2s ease-out forwards";
    // section3contents[3].style.animation =
    //   "slideContents 1.3s 2.2s ease-out forwards";
    // section3contents[4].style.animation =
    //   "slideContents 1.3s 2.4s ease-out forwards";
    // section3contents[5].style.animation =
    //   "slideContents 1.3s 2.6s ease-out forwards";
    // section3contents[6].style.animation =
    //   "slideContents 1.3s 2.8s ease-out forwards";
    // section3contents[7].style.animation =
    //   "slideContents 1.3s 3s ease-out forwards";
    boxLine[2].style.animation =
      "box3Apear 0.5s 1.5s cubic-bezier(0.85, 0, 0.15, 1) forwards";
    boxLine[3].style.animation =
      "box4Apear 0.5s 1.7s cubic-bezier(0.85, 0, 0.15, 1) forwards";
  }
});
// section 4
addEventListener("scroll", function () {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  let section4map = document.querySelector(".section4map");
  let section4copy = document.querySelector(".section4copy");

  if (absoluteTop4 <= (absoluteTop4 - absoluteTop3) / 2) {
    section4map.style.animation = "slideContents 1s 0.8s ease-in-out forwards";
    section4copy.style.animation =
      "container-apear 1s 0.8s ease-in-out forwards";
  }
});

const goToTopBtn = document.querySelector(".toTop");
let rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

goToTopBtn.addEventListener("click", scrollToTop);
