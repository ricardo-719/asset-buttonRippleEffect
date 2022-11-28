const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) =>{
    //to collect the position from the console from pageX and pageY
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop); 
    
    //manipulate the variales defined in style.css
    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
})