
function cursorFunc() {
    const trailer = document.querySelector(".trailer");

    const animateTrailer = (e, interacting, interactable) => {
        const x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

            const moveframes = {
                transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`,
                opacity:0.8
            }

            if(interacting){
                const hoverValue = interactable.dataset.hover;
                trailer.innerHTML = hoverValue
            }else{
                trailer.innerHTML = ""
            }

            trailer.animate(moveframes, { 
                duration: 300, 
                fill: "forwards" 
                });
        }

    window.onmousemove = e => {
        const interactable = e.target.closest(".interactable"),
              interacting = interactable !== null;
        
        animateTrailer(e, interacting, interactable);
    }
}

setTimeout(cursorFunc, 100);













