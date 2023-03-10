let KEPEK = [
  "59.jpg",
  "images.jfif",
  "images2.jfif",
  "img3.jpg",
  "img4.jpg",
  "img6.jfif",
  "img7.jpg",
  "img8.jfif"
];
window.addEventListener("load", init);
function init() {
  let szoveg = "";
  const ARTICEELEM = document.querySelectorAll("article");
  const ButtonELEM = document.querySelectorAll("section button");
  ButtonELEM[0].addEventListener("click", csere);
  for (let i = 0; i < KEPEK.length; i++) {
    szoveg += `<div><img src='${KEPEK[
      i
    ]} 'alt='kep' onclick= 'changeImg(${i})'></div>`;
    const DIVELEM = document.querySelectorAll("article div");
    ARTICEELEM[0].innerHTML = szoveg;
  }
}

function changeImg(i) {
  const image = document.querySelectorAll("section div img");
  image[0].src = KEPEK[i];
}

function csere() {
  i++;
  document.querySelectorAll("article div img").src = KEPEK[i];
  if (i == KEPEK.length - 1) {
    i = -1;
  }
}
