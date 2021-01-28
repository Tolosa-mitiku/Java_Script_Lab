
var result = document.querySelector("#result")
var firstnum = document.querySelector("#firstnum");
var plus = document.querySelector("#plus");
var minus1 = document.querySelector("#minus");
var times1 = document.querySelector("#times");
var divide1 = document.querySelector("#divide");
var nine = document.querySelector("#nine");
var eight = document.querySelector("#eight");
var seven = document.querySelector("#seven");
var six = document.querySelector("#six");
var five = document.querySelector("#five");
var four = document.querySelector("#four");
var three = document.querySelector("#three");
var two = document.querySelector("#two");
var one = document.querySelector("#one");
var dot = document.querySelector("#dot");
var zero = document.querySelector("#zero");
var cr = document.querySelector("#cr");
var power = document.querySelector("#power");
var sqrt = document.querySelector("#sqrt");



var c = new Array();
c.push(0)
var b = 0;
var a = 0;
var d = "";
// var e = 0;
var tracker = true;
var lengthholder = 0;

sqrt.addEventListener('click', sqrte)
power.addEventListener('click', powere)
nine.addEventListener('click', ninee)
eight.addEventListener('click', eighte)
seven.addEventListener('click', sevene)
six.addEventListener('click', sixe)
five.addEventListener('click', fivee)
four.addEventListener('click', foure)
three.addEventListener('click', threee)
two.addEventListener('click', twoe)
one.addEventListener('click', onee)
// dot.addEventListener('click', dote)
zero.addEventListener('click', zeroe)
cr.addEventListener('click', cre)

plus.addEventListener('click', add);
minus1.addEventListener('click', minus);
times1.addEventListener('click', times);
divide1.addEventListener('click', divide);


function calculator(x) {
    if (tracker == true) {
        firstnum.value += x.toString()
        a = x
        c.push(a)
        result.value = c[c.length - 1]
        console.log(c);
        tracker = false;
    }
    else {
        firstnum.value += x.toString()
        if (b == 1) {
            a += x
            c.push(a)
            console.log(c);
            result.value = c[c.length - 1];
        }
        else if (b == 2) {
            a -= x
            c.push(a)
            result.value = c[c.length - 1]
        }
        else if (b == 3) {
            a *= x
            c.push(a)
            result.value = c[c.length - 1]
        }
        else if (b == 4) {
            if (x == 0) {
                c.push("saks")
                result.value = "Can't divide by zero"
            }
            else {
                a /= x
                c.push(a)
                result.value = c[c.length - 1]   
            }
        }
        else if (b == 5) {
            a = Math.pow(a, x)
            c.push(a)
            result.value = c[c.length - 1]
        }
        else if (b == 6) {
            a = Math.sqrt(x)
            c.push(a)
            result.value = c[c.length - 1]
        }
    }
}


function ninee(e) {
    e.preventDefault();
    calculator(9)
}
function eighte(e) {
    e.preventDefault();
    calculator(8)
}
function sevene(e) {
    e.preventDefault();
    calculator(7)
}
function sixe(e) {
    e.preventDefault();
    calculator(6)
}
function fivee(e) {
    e.preventDefault();
    calculator(5)
}
function foure(e) {
    e.preventDefault();
    calculator(4)
}
function threee(e) {
    e.preventDefault();
    calculator(3)
}
function twoe(e) {
    e.preventDefault();
    calculator(2)
}
function onee(e) {
    e.preventDefault();
    calculator(1)
}
function zeroe(e) {
    e.preventDefault();
    calculator(0)
}
function cre(e) {
    e.preventDefault();
    if (tracker == true) {
        firstnum.value = firstnum.value.substring(0, firstnum.value.length - 1)
        c.pop()
        a = c[c.length - 1]
        tracker = false;
    }
    else {
        if (firstnum.value[firstnum.value.length - 1] == "+" || firstnum.value[firstnum.value.length - 1] == "-" || firstnum.value[firstnum.value.length - 1] == "*" || firstnum.value[firstnum.value.length - 1] == "/") {
            d = firstnum.value[firstnum.value.length - 1]
            firstnum.value = firstnum.value.substring(0, firstnum.value.length - 1)
        }
        else {
            firstnum.value = firstnum.value.substring(0, firstnum.value.length - 1)
            c.pop()
            a = c[c.length - 1]
            result.value = c[c.length - 1]
        }

    }


}

function add(e) {
    e.preventDefault();
    if (tracker == true) {
        firstnum.value += "+"
        b = 1
        tracker = false;
    }
    else {
        firstnum.value += "+"
        b = 1

    }
}
function minus(e) {
    e.preventDefault();
    if (tracker == true) {
        firstnum.value += "-"
        b = 2
        tracker = false;
    }
    else {
        firstnum.value += "-"
        b = 2
    }
}
function times(e) {
    e.preventDefault();
    if (tracker == true) {
        firstnum.value += "*"
        b = 3
        tracker = false;
    }
    else {
        firstnum.value += "*"
        b = 3
    }
}
function powere(e) {
    e.preventDefault();
    if (tracker == true) {
        firstnum.value += "^"
        b = 5
        tracker = false;
    }
    else {
        firstnum.value += "^"
        b = 5

    }
}
function sqrte(e) {
    e.preventDefault();
    if (tracker == true) {
        firstnum.value += "|"
        b = 6
        tracker = false;
    }
    else {
        firstnum.value += "|"
        b = 6

    }
}
function divide(e) {
    e.preventDefault();
    if (tracker == true) {
        firstnum.value += "/"
        b = 4
        tracker = false;
    }
    else {
        firstnum.value += "/"
        b = 4
    }
}
