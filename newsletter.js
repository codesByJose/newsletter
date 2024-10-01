
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menuList = document.getElementById("menu");
const container = document.querySelector(".container")

menuOpen.addEventListener("click", ()=>{
    menuList.style.visibility = "visible";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    container.classList.add("gradient-effect")

});

menuClose.addEventListener("click",()=>{
    menuList.style.visibility = "hidden";
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    container.style.background = "none";
    container.classList.remove("gradient-effect")
})