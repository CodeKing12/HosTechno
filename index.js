

function openNav() {
    windowWidth = window.innerWidth;
    if (windowWidth <= 700 && windowWidth >= 470) {
        document.getElementById("sideNav").style.width = "58%";
    } else if (windowWidth <= 470) {
        document.getElementById("sideNav").style.width = "100%";
    } else {
        document.getElementById("sideNav").style.width = "40%";
    }
}
  
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}