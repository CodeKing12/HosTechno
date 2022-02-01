

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

let all_prices = document.getElementsByClassName("aplan");
function priceColoring(hovered) {
    for (let a=0; a < all_prices.length; a++) {
        all_prices[a].classList.remove("highlight-plan")
        hovered.classList.add("highlight-plan")
    }
}

function backToDefault() {
    let priceDefault = document.getElementById("highPlan")
    for (let a=0; a < all_prices.length; a++) {
        all_prices[a].classList.remove("highlight-plan")
    }
    priceDefault.classList.add("highlight-plan")
}