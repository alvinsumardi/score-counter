let homeScore = 0
let guestScore = 0

 function plus(num, dest) {
     let sideScore
     if (dest == "guest") {
         guestScore += num
         document.getElementById("guest-score").textContent = guestScore
     } else if (dest == "home") {
         homeScore += num
         document.getElementById("home-score").textContent = homeScore
     }
 }