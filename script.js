// scroll reveal animation
const elements = document.querySelectorAll(".card, section, h2");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
});

elements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});


// smooth scroll for button
const btn = document.querySelector(".btn");

if(btn){
btn.addEventListener("click", function(e){
    e.preventDefault();

    const target = document.querySelector("#blogs");

    if(target){
        target.scrollIntoView({
            behavior: "smooth"
        });
    }
});
}


// particles
const container = document.querySelector(".particles");

if(container){
for(let i=0;i<50;i++){
    let s = document.createElement("span");
    s.style.left = Math.random()*100 + "vw";
    s.style.animationDuration = (5 + Math.random()*10) + "s";
    s.style.animationDelay = Math.random()*5 + "s";
    container.appendChild(s);
}
}