let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");
dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typeEffect = new Typed("#text",{
    strings:["Sunny G Jate","Coder","Developer"],
    loop: true,
    typeSpeed:60,
    backSpeed:40,
    backDelay:1000,
})
