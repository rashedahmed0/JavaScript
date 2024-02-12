function leapYear(year) {
    if (year % 4 === 0) {
        let leapYear = `${year} is leapYear`;
        return leapYear;
    }
    else {
        let notLeapYear = `${year} is not leapYear`;
        return notLeapYear;

    }
}
let year = 2022;
let checkLeapYear = leapYear(year);
console.log(checkLeapYear);
