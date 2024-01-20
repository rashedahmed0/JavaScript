// inch to feet 

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;

}
var myInch = 122;
var feet = inchToFeet(myInch);
console.log(feet);

let dadarinch = 144;
var dadarFeet = inchToFeet(dadarinch);
console.log(dadarFeet);


// mm to cm
function mmToCm(mm) {
    cm = mm / 10;
    return cm
}
var mm = 120;
var cm = mmToCm(mm);
console.log(cm);

// mm to m
function mmToM(mm) {
    var meter = mm / 100;
    return meter;

}
var millimeter = 1000;
var meter = mmToM(millimeter);
console.log(meter);

