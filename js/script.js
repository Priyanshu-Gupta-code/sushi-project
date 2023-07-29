import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const mobile_nav=document.querySelector(".header__menu-mobile");
const header_nav = document.querySelector(".header__nav");
const nav_lists=document.querySelectorAll(".header__menu > li > a");

mobile_nav.addEventListener("click", () => {
    header_nav.classList.toggle("active");
});

nav_lists.forEach(function(list){
    console.log(list);
    list.addEventListener("click", function(){
        header_nav.classList.remove("active"); 
    });
});
