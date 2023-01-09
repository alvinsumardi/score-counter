let homeScoreNum = 0
let guestScoreNum = 0
let guestScore = document.getElementById("guest-score")
let homeScore = document.getElementById("home-score")


 function plus(num, dest) {
     if (dest == "guest") {
         guestScoreNum += num
         guestScore.textContent = guestScoreNum
         updateLeader()
     } else if (dest == "home") {
         homeScoreNum += num
         homeScore.textContent = homeScoreNum
         updateLeader()
     }
 }
 
 
 
function updateLeader () {
    if (homeScoreNum > guestScoreNum) {
        homeScore.className = "score leader"
        guestScore.className = "score"
        
    } else if (homeScoreNum < guestScoreNum) {
        homeScore.className = "score"
        guestScore.className = "score leader"
        
    } else {
        homeScore.className = "score"
        guestScore.className = "score"
        
    }
}