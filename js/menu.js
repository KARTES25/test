const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight

console.log(windowInnerWidth);
console.log(windowInnerHeight);

if (windowInnerWidth < 1370) {
    document.getElementById('logo').src = "img/Logo5.png"
}
if (windowInnerWidth < 500) {
    document.getElementById('logo').src = "img/"
}

function openm(){

    var elements = document.getElementsByClassName('spa1');
    for (i = 0; i < elements.length; i++) {
        console.log(elements.length)
        elements[i].style.display = 'flex';
    }   
    document.getElementsByClassName('menu1')[0].style.width = "300px";
    document.getElementsByClassName('menu')[0].style.width = "300px";

    var elements2 = document.getElementsByClassName('a1');
    for (i = 0; i < elements.length; i++) {
        console.log(elements.length)
        elements2[i].style.border = "none";
    } 
    document.getElementById('im2').style.display = 'flex';
    document.getElementById('im1').style.display = 'none';

}

function closem(){

    var elements = document.getElementsByClassName('spa1');
    for (i = 0; i < elements.length; i++) {
        console.log(elements.length)
        elements[i].style.display = 'none';
    }   
    document.getElementsByClassName('menu1')[0].style.width = "80px";
    document.getElementsByClassName('menu')[0].style.width = "42px";

    var elements2 = document.getElementsByClassName('a1');
    for (i = 0; i < elements.length; i++) {
        console.log(elements.length)
        elements2[i].style.borderBottom = "solid";
    } 
    document.getElementById('im2').style.display = 'none';
    document.getElementById('im1').style.display = 'flex';

}


function openmob() {
    var x = document.getElementsByClassName("dws-ul")[0];
    if (x.style.display === "block") {
      x.style.display = "none";

    } else {
      x.style.display = "block";
    }

    var x = document.getElementsByClassName("menu1")[0];
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}