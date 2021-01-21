let personProfile = {   
    firstName : "",
    lastName : "",
    birthYear : "",
    job : "",
    age : 0,
    bmi : 0,
    isEligible : false,
    noOfFamily : "",
    familyMembers : [],
    height : 1.72,
    weight : 60,
    ageCalc : function() {
        this.age = new Date().getFullYear() - this.birthYear
    },
    calcbmi : function() {
        this.bmi = this.weight / (this.height * this.height)
    },
    bmistatus : function() {
        if (this.bmi < 18.5) {
            return "Your underweight" 
        }
        else if (this.bmi > 18.5 && bmi < 24.9) {
            return "Your normal" 
        }
        else if (this.bmi > 24.9 && this.bmi < 25.0) {
            return "Your overweight" 
        }
        else if (this.bmi > 30.0) {
            return "Your obese" 
        }
    },
    checkvote : function() {
        this.agecalc();
        if (age >= 18) {
            this.isEligible = true;
        }
        else {
            this.isEligible = false;
        }
    }

};
personProfile.firstName = prompt("Your first Name? ");
personProfile.lastName = prompt("Your last Name? ");
personProfile.birthYear = prompt("Your birthyear? ");
personProfile.job = prompt("Your job? ");
personProfile.height = prompt("your height in meters: ")
personProfile.weight = prompt("your weight in kilogram: ")

personProfile.noOfFamily = prompt("How many family member do you have?")

for (let i = 0; i < parseInt(personProfile.noOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Family Members" + (i+1));
    
}
(function() {
    console.log("Here is your profile");
    console.log("Full Name: "+ personProfile.firstName +" " + personProfile.lastName);
    console.log("Profession" + personProfile.job);
    console.log("Age: " + personProfile.tempAge + "" + "years old");
    console.log("is he eligible?" + personProfile.isEligible);
    
    personProfile.familyMembers.forEach(function(familyMember, index) {
        console.log("Family Members " + (index + 1) + ": " + familyMember);
    });
    })();