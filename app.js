let menu=document.querySelector(".fa-bars");
let resNav=document.querySelector(".res-nav");
let resLeft=document.querySelector(".res-nav .right");
let closeMenu=document.querySelector(".fa-xmark");
let search=document.querySelector(".res-search");
let resInp=document.querySelector(".res-inp");
let closeSearch=document.querySelector(".fa-circle-xmark")
menu.addEventListener("click", () => {
    resNav.style.transform = "translateX(0)";
    menu.style.display = "none";
    search.style.display = "none";
});

closeMenu.addEventListener("click", () => {
    resNav.style.transform = "translateX(-100%)";
    menu.style.display = "flex";
    search.style.display = "flex";
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

let themeToggle = document.getElementById("theme-toggle");

    // Check user's saved preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️"; 
    updateTextColors("dark");
} 
else {
    themeToggle.textContent = "🌙"; 
    updateTextColors("light"); 
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) 
    {
        themeToggle.textContent = "☀️";                          // Change to sun icon
        localStorage.setItem("theme", "dark");                   // Save preference
        updateTextColors("dark");
    } 
    else 
    {
        themeToggle.textContent = "🌙";                          // Change to moon icon
        localStorage.setItem("theme", "light");                  // Save preference
        updateTextColors("light"); 
    }
});

function updateTextColors(theme) {
    const elements = document.querySelectorAll('.info, .header h1, .header h1 span'); // Add any other selectors as needed
    elements.forEach(element => {
        if (theme === "dark") {
            element.style.color = "#ffffff"; // White for dark mode
        } else {
            element.style.color = "#000000"; // Black for light mode
        }
    });
}
