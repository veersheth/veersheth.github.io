const cursor = new MouseFollower({
    // container: '.header',
    speed: 0.5,
    textClassName: 'mf-cursor-text',
    className: 'mf-cursor',
});

function spanHeaders(){
    const myHeaders = document.querySelectorAll("h1")
  
    myHeaders.forEach(header => {
        const headerText = header.innerText
        header.innerHTML = ''
        headerText.split('').forEach(character => {
            const characterSpan = document.createElement('span')
            if (character === ' ') {
              characterSpan.innerHTML = "&nbsp;"
            }  
            else { 
              characterSpan.innerText = character 
            }
            header.appendChild(characterSpan) 
        }) 
    })
  
    document.querySelectorAll("span").forEach(span => {
        span.addEventListener( "mouseover", () => {
            console.log("hover");
            span.classList.add("bounce-now")
            setTimeout(function() {
              span.classList.remove("bounce-now")
              //your code to be executed after 1 second
            }, 700);
            // span.classList.toggle("bounce-now")
        })
    })
  }
  
//   the function does not run by itself no matter which .js file I place it at, so this function was made to run it after a half second
  setTimeout(function() {
    spanHeaders()
  }, 500);