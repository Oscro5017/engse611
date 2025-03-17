
document.getElementById('userPic').addEventListener('click', function() {
    var largeImage = document.getElementById('largeImage');
    largeImage.src = "https://avatars.githubusercontent.com/u/188942122?v=4";

    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('popup').style.display = 'none';
    }
});


function chl1() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge1.html');
}

function chl2() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge2.html');
}

function chl3() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge3.html');
}

function chl4() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge4.html');
}

function chl5() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge5.html');
}

function chl6() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge6.html');
}

function chl7() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge7.html');
}

function chl8() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge8.html');
}

function chl9() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge9.html');
}

function chl10() {
    window.open('http://127.0.0.1:5500/engse611/lab7/Challenge/Challenge10.html');
}