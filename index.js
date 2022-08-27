
let homePoint = 0
let guestPoint = 0

let displayHome = document.getElementById("display-home")
let displayGuest = document.getElementById("display-guest")




function homeScored1() {
    homePoint = homePoint + 1
    displayHome.textContent = homePoint
    stylechange()
}   

function homeScored2() {
    homePoint += 2 
    displayHome.textContent = homePoint
    stylechange()
}

function homeScored3() {
    homePoint += 3 
    displayHome.textContent = homePoint
    stylechange()
}

function guestScored1() {
    guestPoint += 1 
    displayGuest.textContent = guestPoint 
    stylechange()
}   

function guestScored2() {
    guestPoint += 2 
    displayGuest.textContent = guestPoint  
    stylechange()
}

function guestScored3() {
    guestPoint += 3 
    displayGuest.textContent = guestPoint
    stylechange()  
}



function resetGame() {
    displayHome.textContent = "00"
    displayGuest.textContent = "00"
    homePoint = 0
    guestPoint = 0
}


function stylechange() {
    if (homePoint < 10) {
        displayHome.textContent = "0" + homePoint
    } 
    if (guestPoint < 10) {
        displayGuest.textContent = "0" + guestPoint 
    }  

    if (homePoint > guestPoint){ 
        displayHome.style.border = "2px solid red";
        displayGuest.style.border = "none";
    }
    else if (homePoint < guestPoint) {
        displayHome.style.border = "none";
        displayGuest.style.border = "2px solid red"
    }    
    else if (homePoint == guestPoint) {
        displayHome.style.border = "2px solid green"
        displayGuest.style.border = "2px solid green"
    }
}


