var parameters = new Array();
var input1;
var result;
var count = 0;
var reinput;
var re = true;

(function() {
    var operation;
    while (re == true) {
        operation = prompt("Enter 1 for addition 2 for subtraction 3 for multiplication 4 for division")
        if (operation == "1") {
            addition()
        }
        else if (operation == "2") {
            subtraction()
        }
        else if (operation == "3") {
            multiplication()
        }
        else if (operation == "4") {
            division()
        }
    }


    })();
function addition() {
    result = 0;
    while (true) {
        input1 = prompt("enter numbers and type stop if you are finished: ");
        if (input1 == "stop") {
            for (let index = 0; index < parameters.length; index++) {
                result += parseInt(parameters[index]);   
            }
            console.log("Here is your result " + result + ".")
            reinput = prompt("If your done type 'quit'. If you want to calculate again type any letter.")
            if (reinput == "quit") {
                re = false;
            }
            break
        }
        parameters[count] = input1;
        count += 1;
    }
}
function subtraction() {
    input1 = prompt("Enter the first Number: ");
    input2 = prompt("Enter the second Number: ");
    result = input1 - input2
    console.log("Here is your result " + result + ".")
    reinput = prompt("If your done type 'quit'. If you want to calculate again type any letter.")
    if (reinput == "quit") {
        re = false;
    }
}
function multiplication() {
    result = 1;
    while (true) {
        input1 = prompt("enter numbers and type stop if you are finished: ");
        if (input1 == "stop") {
            for (let index = 0; index < parameters.length; index++) {
                result *= parseInt(parameters[index]);   
            }
            console.log("Here is your result " + result + ".")
            reinput = prompt("If your done type 'quit'. If you want to calculate again type any letter.")
            if (reinput == "quit") {
                re = false;
            }
            break
        }
        parameters[count] = input1;
        count += 1;
    }
}
function division() {
    input1 = prompt("Enter the first Number: ");
    input2 = prompt("Enter the second Number: ");
    while (input2 == "0") {
        console.log("Denominator can't be zero.")
        input2 = prompt("Enter the second Number: ");
    }
    result = input1 / input2
    console.log("Here is your result " + result + ".")
    reinput = prompt("If your done type 'quit'. If you want to calculate again type any letter.")
    if (reinput == "quit") {
        re = false;
    }
}