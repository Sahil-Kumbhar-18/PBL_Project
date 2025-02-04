let menu=document.querySelector(".fa-bars");
let resNav=document.querySelector(".res-nav");
let resLeft=document.querySelector(".res-nav .right");
let closeMenu=document.querySelector(".fa-xmark");
let search=document.querySelector(".res-search");
let resInp=document.querySelector(".res-inp");
let closeSearch=document.querySelector(".fa-circle-xmark")
menu.addEventListener("click",()=>{
    resNav.style.display="flex";
    resLeft.style.display="flex";
    menu.style.display="none";
    search.style.display="none";
});
closeMenu.addEventListener("click",()=>{
    resNav.style.display="none";
    resLeft.style.display="none";
    menu.style.display="flex";
    search.style.display="flex";
});
search.addEventListener("click",()=>{
        resInp.style.display="flex";
        closeSearch.style.display="flex";
        search.style.display="none";
})

closeSearch.addEventListener("click",()=>{
    resInp.style.display="none";
    closeSearch.style.display="none";
    search.style.display="flex";
})