
var menu = document.querySelector("#menu-bar");
var navclk = document.querySelector("#nav");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navclk.classList.toggle("navclk");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navclk.classList.remove("navclk");
};

var darrkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bxs-moon")) {
    darkmode.classList.replace("bxs-moon", "bx-sun");
    document.body.classList.add("dark");
  } else {
    darkmode.classList.replace("bx-sun", "bxs-moon");
    document.body.classList.remove("dark");
  }
};

var textWrapper = document.querySelector(".flying-letters .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letters'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".flying-letters .letters",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".flying-letters",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

