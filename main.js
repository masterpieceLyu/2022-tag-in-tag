const HTML = document.querySelector("html");
const Main = document.querySelector("#main");
const HiddenContainer = document.querySelector(".tag-hidden_container");
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

console.log(pageWidth);
console.log(pageHeight);
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
      "slideContents 1.1s 2.9s ease-out forwards";
    section2contents[1].style.animation =
      "slideContents 1.1s 3.2s ease-out forwards";
    section2contents[2].style.animation =
      "slideContents 1.1s 3.5s ease-out forwards";
    section2contents[3].style.animation =
      "slideContents 1.1s 3.9s ease-out forwards";
    boxLine[0].style.animation =
      "boxLinegrow1 0.7s 1.5s cubic-bezier(0.85, 0, 0.15, 1) forwards";
    boxLine[1].style.animation =
      "boxLinegrow2 0.7s 2.0s cubic-bezier(0.85, 0, 0.15, 1) forwards";
  }
});
// section 3
addEventListener("scroll", function section3() {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  let spanSlide = document.querySelectorAll(".forSlide");
  let section3Card = document.querySelectorAll(".section3Card");

  let section3boxline = document.querySelectorAll(".section3-box-line");
  let arrow = document.querySelectorAll(".arrow");
  let sectionNum = document.querySelectorAll(".section-num");

  if (absoluteTop3 <= (absoluteTop2 - absoluteTop1) / 2) {
    HTML.classList.add("snap");

    spanSlide[0].style.animation =
      "slideText_section3 0.8s 0.8s ease-in-out forwards";
    spanSlide[1].style.animation =
      "slideText_section3 0.8s 0.8s ease-in-out forwards";
    spanSlide[2].style.animation =
      "slideText_section3 0.8s 0.8s ease-in-out forwards";

    section3boxline[0].style.animation =
      "boxLinegrow3 1s 1.5s cubic-bezier(0.85, 0, 0.15, 1) forwards";
    arrow[0].style.animation =
      "arrowGrow 0.7s 2.5s cubic-bezier(0.85, 0, 0.15, 1) forwards";
    arrow[1].style.animation =
      "arrowGrow 0.7s 2.5s cubic-bezier(0.85, 0, 0.15, 1) forwards";
    sectionNum[0].style.animation =
      "slidetotop 0.7s 2.5s cubic-bezier(0.85, 0, 0.15, 1) forwards";
    sectionNum[1].style.animation =
      "slidetotop 0.7s 2.5s cubic-bezier(0.85, 0, 0.15, 1) forwards";
    sectionNum[2].style.animation =
      "slidetotop 0.7s 2.5s cubic-bezier(0.85, 0, 0.15, 1) forwards";

    section3Card[0].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[1].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[2].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[3].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[4].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[5].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[6].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[7].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[8].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[9].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[10].style.animation = "slideContents 1.3s 3.3s ease forwards";
    section3Card[11].style.animation = "slideContents 1.3s 3.3s ease forwards";
  }
});

//// Arrow click scroll event
// const pageWidth = document.documentElement.scrollWidth;
// const pageHeight = document.documentElement.scrollHeight;
// const section3wraper = document.querySelector(".contents-wraper");
// let arrow = document.querySelector(".arrow");

// function clickarrow() {
//   section3wraper.scrollTo({ left: pageWidth, behavior: "smooth" });
// }
// arrow.addEventListener("click", clickarrow);

// section 4
addEventListener("scroll", function () {
  let absoluteTop1 = tagSection[0].getBoundingClientRect().top.toFixed(0);
  let absoluteTop2 = tagSection[1].getBoundingClientRect().top.toFixed(0);
  let absoluteTop3 = tagSection[2].getBoundingClientRect().top.toFixed(0);
  let absoluteTop4 = tagSection[3].getBoundingClientRect().top.toFixed(0);

  let section4map = document.querySelector(".section4map");
  let section4copy = document.querySelector(".section4copy");
  let bgApear = document.querySelector(".last_section-bg ");

  if (absoluteTop4 <= (absoluteTop4 - absoluteTop3) / 2) {
    section4map.style.animation =
      "slideContents 1s 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards";
    section4copy.style.animation =
      "container-apear 1s 0.8s ease-in-out forwards";
    bgApear.style.animation = "lastsectionBGapear 1.2s 1.8s ease forwards ";
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
