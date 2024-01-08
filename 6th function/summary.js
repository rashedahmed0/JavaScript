// function functionName(parameter) {
//     // function body
//     // return 
// }
// var returnsValues = functionName(parameter_value);

function getAverage(sem1, sem2, sem3) {
    var total = sem1 + sem2 + sem3;
    var average = total / 3;
    return average;
}

var sem1mark = 60;
var sem2mark = 58;
var sem3mark = 59;
var myaverage = getAverage(sem1mark, sem2mark, sem3mark);
console.log(myaverage);