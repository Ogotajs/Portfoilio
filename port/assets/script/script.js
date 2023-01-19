function firstslider() {
  const Navdots = document.getElementById("dots");
  const slider = document.querySelector(".slider");
  const buttonRight = document.querySelector(".button-right");
  const buttonLeft = document.querySelector(".button-left");
  var sectionIndex = 0;

  buttonRight.addEventListener("click", function () {
    sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
    document.querySelector(".selected").classList.remove("selected");
    Navdots.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translateX(" + sectionIndex * -33 + "%)";
  });

  buttonLeft.addEventListener("click", function () {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    document.querySelector(".selected").classList.remove("selected");
    Navdots.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translateX(" + sectionIndex * -33 + "%)";
  });

  document.querySelectorAll(".dots li").forEach(function (indicator, ind) {
    indicator.addEventListener("click", function () {
      sectionIndex = ind;
      document.querySelector(".selected").classList.remove("selected");
      indicator.classList.add("selected");
      slider.style.transform = "translateX(" + ind * -33 + "%)";
    });
  });
}

function secondslider() {
  const Navdots2 = document.getElementById("dots2");
  const slider2 = document.querySelector(".slider2");
  const buttonRight2 = document.querySelector(".button-right2");
  const buttonLeft2 = document.querySelector(".button-left2");
  var sectionIndex = 0;

  buttonRight2.addEventListener("click", function () {
    sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
    document.querySelector(".selected").classList.remove("selected");
    Navdots2.children[sectionIndex].classList.add("selected");
    slider2.style.transform = "translateX(" + sectionIndex * -33 + "%)";
  });

  buttonLeft2.addEventListener("click", function () {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    document.querySelector(".selected").classList.remove("selected");
    Navdots2.children[sectionIndex].classList.add("selected");
    slider2.style.transform = "translateX(" + sectionIndex * -33 + "%)";
  });
  document.querySelectorAll(".dots2 li").forEach(function (indicator, ind) {
    indicator.addEventListener("click", function () {
      sectionIndex = ind;
      document.querySelector(".selected").classList.remove("selected");
      indicator.classList.add("selected");
      slider2.style.transform = "translateX(" + ind * -33 + "%)";
    });
  });
}

function thirdslider() {
  const Navdots3 = document.getElementById("dots3");
  const slider3 = document.querySelector(".slider3");
  const buttonRight3 = document.querySelector(".button-right3");
  const buttonLeft3 = document.querySelector(".button-left3");
  var sectionIndex = 0;

  buttonRight3.addEventListener("click", function () {
    sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
    document.querySelector(".selected").classList.remove("selected");
    Navdots3.children[sectionIndex].classList.add("selected");
    slider3.style.transform = "translateX(" + sectionIndex * -33 + "%)";
  });

  buttonLeft3.addEventListener("click", function () {
    sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
    document.querySelector(".selected").classList.remove("selected");
    Navdots3.children[sectionIndex].classList.add("selected");
    slider3.style.transform = "translateX(" + sectionIndex * -33 + "%)";
  });
  document.querySelectorAll(".dots3 li").forEach(function (indicator, ind) {
    indicator.addEventListener("click", function () {
      sectionIndex = ind;
      document.querySelector(".selected").classList.remove("selected");
      indicator.classList.add("selected");
      slider3.style.transform = "translateX(" + ind * -33 + "%)";
    });
  });
}

firstslider();
secondslider();
thirdslider();
