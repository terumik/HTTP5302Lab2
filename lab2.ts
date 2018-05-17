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



// Part 2 --own work

let htmlBdMsg = document.getElementById('p--birthday-message');
let htmlUserInput = (<HTMLInputElement>document.getElementById("input--date-picker"));
let htmlBtn = (<HTMLInputElement>document.getElementById("button--birthday"));

htmlBtn.onclick = function() {
    displayMessage(getUserInput());
}



function getUserInput() {
    let formattedInput = htmlUserInput.value + " 00:00:00";
    let bd = new Date(formattedInput);
    return bd;
    // Tue May 15 2018 00:00:00 GMT-0400 (Eastern Daylight Time
}

function displayMessage(bdInput:Date) {
    let today = new Date();
    let bdCurrentYear = `${bdInput.getFullYear()}-${bdInput.getMonth()+1}-${bdInput.getDate()}`;
    let bdCurrent = new Date(bdCurrentYear);
    console.log(days[bdCurrent.getDay()]);

    if((today.getMonth()==bdInput.getMonth()) && (today.getDate()==bdInput.getDate())){
        htmlBdMsg.innerHTML = `Happy Birthday!`;
    }
    else{
        htmlBdMsg.innerHTML = `Your birthday (${months[bdInput.getMonth()]} ${bdInput.getDate()}) in ${today.getFullYear()} is on ${days[bdCurrent.getDay()]}`; 
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