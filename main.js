AOS.init();

let mouseCursor = document.querySelector(".cursor");
let mediaIcons = document.querySelector(".social-media-icons")
let text = document.querySelectorAll(".placeholder, a")
window.addEventListener("mousemove", (e) => {
  mouseCursor.setAttribute("style", "top: "+ (e.pageY)+'px; left: '+(e.pageX)+"px; ")
  // console.log(e)
})

text.forEach(object => {
  object.addEventListener('mouseleave', ()=>{
    mouseCursor.classList.remove("grow");
  } );
  object.addEventListener('mouseover', ()=>{
    mouseCursor.classList.add("grow");
  } );
});
