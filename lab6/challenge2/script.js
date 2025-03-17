const changeColor = document.querySelectorAll("#main p");

changeColor.forEach(p => {
    if(p.textContent.includes("Llamas and Chickens!")){
        p.style.color = "red";
    }
});