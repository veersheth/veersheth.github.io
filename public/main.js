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
            span.classList.add("h1-animate")
            setTimeout(function() {
              span.classList.remove("h1-animate")
              //your code to be executed after 1 second
            }, 700);
            // span.classList.toggle("h1-animate")
        })
    })
  }


// timeout helps the functions run since they have problems running on startup
setTimeout(function() {
  spanHeaders()
}, 500);