function cursorFunc() {
    // Get the trailer element
    let trailer = document.querySelector(".trailer");

    // Function to animate the trailer
    const animateTrailer = (e, interacting, interactable) => {
        let x = e.clientX - trailer.offsetWidth / 2,
            y = e.clientY - trailer.offsetHeight / 2;

        let moveframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`,
            opacity:1,
        }

        if(interacting){
            let hoverValue = interactable.dataset.hover;
            trailer.innerHTML = hoverValue
        }else{
            trailer.innerHTML = ""
        }

        trailer.animate(moveframes, { 
            duration: 300, 
            fill: "forwards" 
        });
    }

    // Add event listener for mouse movement
    window.addEventListener('mousemove', e => {
        let interactable = e.target.closest(".interactable"),
            interacting = interactable !== null;
        
        animateTrailer(e, interacting, interactable);
    });
}

setTimeout(cursorFunc, 100);