(function(){
"use strict";
const green = document.querySelector('button');
const ptags = document.querySelectorAll('p');
green.addEventListener('click', function(){
    //Recorrer etiquetas p
    for(let x = 0; x < ptags.length; x ++){
        ptags[x].style.color = "green";
        ptags[x].style.fontFamily = "cursive";
        ptags[x].style.fontSize = "30px";
    }
});


const title = document.querySelector(".btntitle");
title.addEventListener('click', function(){
const head = document.querySelector('h1');
head.style.color = "red";
head.style.fontFamily = "cursive";
head.style.fontSize = "35px";
});


})();