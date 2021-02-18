// 1. A Person Constructor function 
function Person(firstName, lastName) {

    // 1. set the firstName and lastName using this keyword
    this.firstName = firstName;
    this.lastName = lastName;
    //2. Create a greeting function returns [use this keyword to get the first and last name]
    this.greeting = function() {
        console.log("Hi, " + this.firstName + this.lastName);

    }
    //  ==> Hi , firstName lastName



}

//3. Create Jon Whose full name is ["Jon", "Snow"] Object using new keyword [new ConstructorFun()]

    Jon = new Person("jon", "snow")
//4. Display the greeting on Jon Object [remove the string when you have the object]
Obj_C1.innerHTML = Jon.greeting();