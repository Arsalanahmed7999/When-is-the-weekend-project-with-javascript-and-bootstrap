let date = document.querySelector('.date');
let dates = ['Sunday', 'Monday', "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"]
let today = new Date()
let todayDate = today.getDay()
let day = dates[todayDate]
date.innerHTML = `Today is ${day}`
let message = document.querySelector('.message')
if(todayDate<5 && todayDate>0){
    message.innerHTML = 'Weekend is coming &#128532;'
}
else if ( todayDate == 0 || todayDate == 6){
    message.innerHTML = 'Happy Weekend! &#128512;'
}
else{
    message.innerHTML = 'Weekend in here &#128518;'
}
console.log(todayDate)