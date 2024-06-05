let solagac=document.getElementById("img1");
let solkapi=document.getElementById("img2");
let sagagac=document.getElementById("img3");
let sagkapi=document.getElementById("img4");
let cimen=document.getElementById("img5");
window.addEventListener("scroll", () => {
    var value = window.scrollY;
    solkapi.style.left.value*7('px');
    solagac.style.left.value*7('px');
    sagkapi.style.right.value*7('px');
    sagagac.style.right.value*7('px');
    sagagac.style.marginBottom.value*7('px');
});