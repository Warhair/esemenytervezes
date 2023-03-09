window.addEventListener("load",init)
function init(){
    const KEPEK = ["59.jpg", "images.jif", "images2.jif","img3.png","img4.png","img6.png","img7.png","img8.png"];
    const ARTICEELEM = document.querySelectorAll("article")
    for (let index = 0; index < KEPEK.length; index++) {
        ARTICEELEM[index].innerHTML +=`<div><img src= ${KEPEK[index]} alt='kep'></div>`;
        
    }
    
    
}