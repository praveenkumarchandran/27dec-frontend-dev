let currentDate = new Date();

console.log("current date is :",currentDate);


let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

console.log("year:", year);
console.log("Day:", day);
console.log("month:",month);


currentDate.setFullYear(2005);

currentDate.setMonth(5);
currentDate.setDate(15);

console.log("updated", currentDate);


let dayOfWeek = currentDate.getDay("2024-02-02");
console.log("day of the week : ", dayOfWeek);



let formatteddate = currentDate.toDateString();
console.log("formatted date:",formatteddate);


currentDate.setDate(currentDate.getDate()+5);
currentDate.setHours(currentDate.getHours()-3);


console.log("udated date after ading 5 days and subract 3 hrs:", currentDate);


let dateString = '2024-02-15';

let parseDate = new Date(dateString);


console.log("parse date form string:",parseDate);


