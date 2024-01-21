const currentYear = 2024;
if (currentYear % 4 === 0) {
    console.log('this year is leap year ');
}
else {
    console.log('this is not leap year');
}


function leapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true
    }
    else {
        return false;
    }
}
const year = leapYear(2024);
console.log(year);

