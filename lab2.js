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
