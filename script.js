
});

});/* ===========================
LOADER
=========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

},1200);

});

/* ===========================
SCROLL ANIMATION
=========================== */

const fade=document.querySelectorAll(".fade-up");

window.addEventListener("scroll",()=>{

fade.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("show");

}

});

});
