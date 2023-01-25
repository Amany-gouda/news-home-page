let menuBars=document.getElementById("menu");

let crossIcon = document.getElementById("cross");

let mainmenu=document.getElementsByClassName("mainmenu");

let overlay= document.getElementsByClassName("overlay");

console.log(menuBars);

menuBars.addEventListener("click",()=>{

        menuBars.classList.remove("mob"); 
        crossIcon.classList.add("mob");

});
menuBars.addEventListener("click",()=>{
        mainmenu[0].classList.add("active");
});
menuBars.addEventListener("click",()=>{
        overlay[0].classList.add("appear");
});
// cross icon status
crossIcon.addEventListener("click",()=>{
        crossIcon.classList.remove("mob");
        menuBars.classList.add("mob"); 
});
crossIcon.addEventListener("click",()=>{
        mainmenu[0].classList.remove("active");
});
crossIcon.addEventListener("click",()=>{
        overlay[0].classList.remove("appear");
});
overlay[0].addEventListener("click",()=>{
        mainmenu[0].classList.remove("active");
        overlay[0].classList.remove("appear");
        crossIcon.classList.remove("mob");
        menuBars.classList.add("mob"); 
})

// 58F08C7B765()