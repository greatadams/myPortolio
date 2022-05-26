const hamburger = document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");
const name= document.querySelector(".name");
const country= document.querySelector(".country");
const personImg= document.querySelector(".person-img");
const countryImg= document.querySelector(".country-img");


hamburger.addEventListener("click",()  => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
 hamburger.classList.remove("active");
 navMenu.classList.remove("active")

    
}));

//mouseover
name.addEventListener("mouseover", () => {
    personImg.style.display ="block";
});

//mouseleave
name.addEventListener("mouseleave",() =>{
    personImg.style.display=""
})


//mouseover
country.addEventListener("mouseover", () => {
    countryImg.style.display ="block";
});


//mouseleave
country.addEventListener("mouseleave",() =>{
    countryImg.style.display=""
})

window.addEventListener("mousemove",(e) => {
    let x =e.offsetX,
     y = e.offsetY

   if(e.target.classList.contains("name")){
       personImg.style.left = `${x}px`;
       personImg.style.top = `${y}px`;
   }  
   if(e.target.classList.contains("country")){
    countryImg.style.left = `${x}px`;
    countryImg.style.top = `${y}px`;
}  
})
const cards = document.querySelectorAll(".card")
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show",entry.isIntersecting)
        })
    },
    {
        threshold:0.5
    }
)
cards.forEach(card => {
    observer.observe(card)
})