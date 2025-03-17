const alerted = document.querySelectorAll("nav a");
alerted.forEach(link => {
    link.addEventListener("click", function(event) {
        alert("clicked!");
    });
});