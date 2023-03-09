window.addEventListener("load",init)
function init(){
    const ARTICEELEM = document.querySelectorAll("article")
    ARTICEELEM[0].innerHTML ="<div><img src='HTML5.png' alt='kep'></div>";
    ARTICEELEM[0].innerHTML += "<button>OK</button>";
    const ButtonELEM = document.querySelectorAll("article button");

    ButtonELEM[0].addEventListener("click",function(){
        const DIVELEM = document.querySelectorAll("article div");
        DIVELEM[0].classList.add("formazas")
    })
    const KEPELEM = document.querySelectorAll("article div img");
    KEPELEM[0].addEventListener("mouseover",function(){
        KEPELEM[0].classList.toggle("hover")
        
    })
    KEPELEM[0].addEventListener("mouseout",function(){
        KEPELEM[0].classList.toggle("leave")
        
    })
}
