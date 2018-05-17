// get element in html
let htmlToday = document.getElementById('p--today-date');

let today = new Date();
console.log(today); 
//Thu May 17 2018 08:57:02 GMT-0400 (Eastern Daylight Time)

// month
console.log(today.getMonth()); // 4 for May

// enums (this is not an array nor object)
enum months{
    January, // 0
    February,
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
let todayMonth:string = months[today.getMonth()];

// Date
console.log(today.getDate());

// Year
console.log(today.getFullYear());

// Day
console.log(today.getDay()); // 4 for thursday

enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
let todayDay:string = days[today.getDay()];


// this error is not an error but a warning
htmlToday.innerHTML = `Today is ${ todayMonth } ${today.getDate()}, ${today.getFullYear()} (${todayDay})`;