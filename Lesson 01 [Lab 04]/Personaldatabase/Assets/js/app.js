var firstName;
var lastName;
var birthYear;
var job;
let tempAge;
let isEligible;
let familyMembers = new Array();
let noOfFamily;
let height;
let weight;

firstName = prompt("Your first Name? ");
lastName = prompt("Your last Name? ");
birthYear = prompt("Your birthyear? ");
job = prompt("Your job? ");
height = prompt("your height in meters: ")
weight = prompt("your weight in kilogram: ")

noOfFamily = prompt("How many fmaily member do you have?")

for (let i = 0; i < parseInt(noOfFamily); i++) {
    familyMembers[i] = prompt("Family Members" + (i+1));
    
}
bmi = calcbmi(height, weight);
bmistatus = bmistatus(bmi);
tempAge = calcAge(birthYear);
if (tempAge >= 18) {
    isEligible = true;
}
else {
    isEligible = false;
}
(function() {
console.log("Here is your profile");
console.log("Full Name: "+ firstName +" " + lastName);
console.log("Profession" + job);
console.log("Age: " + tempAge + "" + "years old");
console.log("is he eligible?" + isEligible);
console.log("bmi: " + bmi);
console.log("bmi: " + bmistatus);

familyMembers.forEach(function(familyMember, index) {
    console.log("Family Members " + (index + 1) + ": " + familyMember);
});
})();
function calcAge(by) {
    return new Date().getFullYear() - by;
}
function bmistatus(bmi) {
    if (bmi < 18.5) {
        return "Your underweight" 
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        return "Your normal" 
    }
    else if (bmi > 24.9 && bmi < 25.0) {
        return "Your overweight" 
    }
    else if (bmi > 30.0) {
        return "Your obese" 
    }
}
function calcbmi(h,w) {
    return w / (h * h)
}