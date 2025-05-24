var dropElement = document.getElementById("dropdown");
var mainElement = document.getElementById("main");
var soltorgElement = document.getElementById("soltorg-image");


changeHeaderTitle();
function changeHeaderTitle() {
    let fileName = location.href.split('/').slice(-1).toString().split('.').slice(); 
    let outName = fileName[0];
    document.getElementById("subsite-header").textContent = outName;
    document.getElementById("title").textContent = outName + " - Soltorgsgymnasiet";
}

function toggleMenu() {
    if (dropElement.style.display == "none") {
        dropElement.style.display = "block";
        mainElement.style.display = "none"
        soltorgElement.style.display = "none"
        return;
    }
    dropElement.style.display = "none";
    mainElement.style.display = "grid"
    soltorgElement.style.display = "block"
}
function goHome() {
    window.location.href = "../index.html";
}

