let par =document.querySelector(".icon-par")
let list=document.querySelector(".list")
par.addEventListener("click", function () {
    list.classList.toggle("hidde");
        par.classList.toggle("hidde-border");
});