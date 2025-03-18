function changeToMainPic0() {
    const mainPic = document.getElementById("MP");
    mainPic.src = "https://picsum.photos/600/800?blur1";
}
function changeToMainPic1() {
    const mainPic = document.getElementById("MP");
    mainPic.src = "https://picsum.photos/600/800?grayscale&blur2";
}
function changeToMainPic2() {
    const mainPic = document.getElementById("MP");
    mainPic.src = "https://picsum.photos/600/800";
}
function changeToMainPic3() {
    const mainPic = document.getElementById("MP");
    mainPic.src = "https://picsum.photos/600/800?grayscale";
}

function reload() {
    location.reload();
}