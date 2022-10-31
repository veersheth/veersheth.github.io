// import Header from './components/Header';
// import contextCursor from "./components/contextCursor/index.ts"
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2"


function App() {

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
  

  return (
    <div className="App">
      <Slide1/>
      <Slide2/>
      {spanHeaders()}
    </div>
  );
}

export default App;
