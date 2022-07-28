let homeResultEl = document.getElementById("home-result")
let guestResultEl = document.getElementById("guest-result")
let homeResult = 0
let guestResult = 0


function plus(numberOfPoints, homeOrGuest) {
    console.log("plus")
    console.log(homeOrGuest)
    console.log(numberOfPoints)
    
    if (homeOrGuest == "home") {
        homeResult += numberOfPoints
        homeResultEl.textContent = homeResult
    } else if (homeOrGuest == "guest") {
        guestResult += numberOfPoints
        guestResultEl.textContent = guestResult        
    } else {
        console.log("homeOrGuest=" + homeOrGuest + "WRONG value!!" )
    }

}

// function homePlus(val) {
//     console.log("homePlus")
//     homeResult += val
//     homeResultEl.textContent = homeResult
// }

// function guestPlus(val) {
//     console.log("guestPlus")
//     guestResult += val
//     guestResultEl.textContent = guestResult
// }

