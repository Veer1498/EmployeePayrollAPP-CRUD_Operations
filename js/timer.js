function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs: " + date.getMinutes() + "Mins: "+date.getSeconds()+ "Secs";

}

function showSessionExpire(){
    console.log("Activity-B: Your session Expired at "+showTime());
}

console.log("Activity-A: Trigerring Activity-B at "+showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A : Trigerred Activity-B at "+showTime()+" will execute after 5 Seconds")