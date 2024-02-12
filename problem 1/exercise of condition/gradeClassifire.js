function gradeClassifire(grade) {
    if (number >= 80) {
        let aPuls = 'your grade is A+';
        return aPuls
    }
    else if (number >= 70 && number < 80) {
        let a = 'your grade is A';
        return a;
    }
    else if (number >= 60 && number < 70) {
        let aMinus = 'your grade is A-'
        return aMinus
    }
    else if (number >= 50 && number < 60) {
        let b = 'your grade is B';
        return b
    }
    else if (number >= 40 && number < 50) {
        let bMunus = 'your grade is B-';
        return bMunus;
    }
    else {
        let fail = 'you are fail';
        return fail;

    }



}
let number = 89;
let grade = gradeClassifire(number);
console.log(grade);