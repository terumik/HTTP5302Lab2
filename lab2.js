// get element in html
var htmlToday = document.getElementById('p--today-date');
var today = new Date();
console.log(today);
//Thu May 17 2018 08:57:02 GMT-0400 (Eastern Daylight Time)
// month
console.log(today.getMonth()); // 4 for May
// enums (this is not an array nor object)
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
console.log("Month enum:");
console.log(months);
/*
each member increment by 1
enum months{
    January =1,
    February, // this will be 2
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
*/
// Month 
console.log(months.February); // 1
console.log(months[today.getMonth()]); // May
var todayMonth = months[today.getMonth()];
// Date
console.log(today.getDate());
// Year
console.log(today.getFullYear());
// Day
console.log(today.getDay()); // 4 for thursday
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var todayDay = days[today.getDay()];
// this error is not an error but a warning
htmlToday.innerHTML = "Today is " + todayMonth + " " + today.getDate() + ", " + today.getFullYear() + " (" + todayDay + ")";
// Part 2 --own work
var htmlBdMsg = document.getElementById('p--birthday-message');
var htmlUserInput = document.getElementById("input--date-picker");
var htmlBtn = document.getElementById("button--birthday");
htmlBtn.onclick = function () {
    displayMessage(getUserInput());
};
function getUserInput() {
    var formattedInput = htmlUserInput.value + " 00:00:00";
    var bd = new Date(formattedInput);
    return bd;
    // Tue May 15 2018 00:00:00 GMT-0400 (Eastern Daylight Time
}
function displayMessage(bdInput) {
    var today = new Date();
    var bdCurrentYear = bdInput.getFullYear() + "-" + (bdInput.getMonth() + 1) + "-" + bdInput.getDate();
    var bdCurrent = new Date(bdCurrentYear);
    console.log(days[bdCurrent.getDay()]);
    if ((today.getMonth() == bdInput.getMonth()) && (today.getDate() == bdInput.getDate())) {
        htmlBdMsg.innerHTML = "Happy Birthday!";
    }
    else {
        htmlBdMsg.innerHTML = "Your birthday (" + months[bdInput.getMonth()] + " " + bdInput.getDate() + ") in " + today.getFullYear() + " is on " + days[bdCurrent.getDay()];
    }
}
// Part 2 --answer
// let userBirthday:string;
// let inputDatePicker = document.getElementById('input--date-picker');
// let buttonBd = document.getElementById('button--birthday');
// buttonBd.onclick = function(){
//     userBirthday = inputDatePicker.value;
//     console.log(userBirthday);
//     let userBirthdayDate = new Date(userBirthday + " 00:00:00");
//     console.log(userBirthdayDate);
//     document.getElementById('p--birthday-message').innerHTML = constructDateString(userBirthdayDate);
// }
// function constructDateString(inputDate:Date):string {
//     // return Happy Birthday if the user's birthday is today
//     if((inputDate.getMonth()===today.getMonth()) 
//     && inputDate.getDate()===today.getDate()){
//         return `Happy Birthday`;
//     }
//     // return the date of hte bd of the current year
//     let currentYearBd:Date = new Date(`${today.getFullYear()}-${inputDate.getMonth()}-${inputDate.getDate()}`);
//     return `Your birthday is on ${days[currentYearBd.getDay()]} ${months[currentYearBd.getMonth()]} ${currentYearBd.getDate()}`;
// }
