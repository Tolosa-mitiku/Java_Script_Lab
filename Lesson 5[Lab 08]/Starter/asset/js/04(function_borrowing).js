//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    usingCall();
    usingApply();
    usingBind();
    usingES5();
    usingES6();


});

//Brad Person Object 
const Brad = {
    firstName: "Brad",
    lastName: "Bansely",
    fullName: function(ui_place, message) {

        ui_place.innerHTML = `${message} ${this.firstName} ${this.lastName}`;

    }
}

function usingCall() {

    //Cerscy Person Object 
    const Cerscy = {
        firstName: "Cerscy ",
        lastName: "Lanster",
        getFullName: function(){
            return "Hi I am " + this.firstName + " " + this.lastName
        }
    }

    //1. Borrow fullName using call
    const object1 = {
        firstName: "Arya",
        lastName: "Stark",
    }
    var result = Cerscy.getFullName.call(object1)
    //2. Pass call_demo[as ui_place] , Hi I am ,[message]
    call_demo.innerHTML = `${result}`;

}

function usingApply() {

    //Jon Person Object 
    const Jon = {
        firstName: "Jon",
        lastName: "Snow",
        getFullName: function(){
            return "Hi I am " + this.firstName + " " + this.lastName
        }
    }

    //1. Borrow fullName using apply
    const object2 = {
        firstName: "Rob",
        lastName: "Stark",
    }
    var result = Jon.getFullName.apply(object2)
    //2. Pass apply_demo[as ui_place] and Hi I am ,[as message] as array
    apply_demo.innerHTML = `${result}`;

}

function usingBind() {

    //Daenerys Person Object 
    const Daenerys = {
        firstName: "Daenerys",
        lastName: "Targaryen",
        getFullName: function(){
            return "Hi I am " + this.firstName + " " + this.lastName
        }
    }

    //1. Borrow fullName using bind
    const object3 = {
        firstName: "Sansa",
        lastName: "Stark",
    }
    var result = Daenerys.getFullName.bind(object3)
    //2. Pass bind_demo[as ui_place] , Hi I am ,[as message]
    bind_demo.innerHTML = `${result()}`;

}

function usingES5(){
    const Sansa = {
        name: "Sansa",
        list: ["Wintefell"],
        display: function(){
            var self = this
            return self.list.map(function(value){
                return `${self.name} Became the queen of ${value}.`
            });
        }
    }

    es5.innerHTML = `${Sansa.display()}`; 
}
function usingES6(){
    const Rob = {
        name: "Rob",
        list: ["tyrell"],
        display: function(){
            return this.list.map((value)=>{
                return `${this.name}  was killed by ${value} at the red wedding.`
            });
        }
    }
    es6.innerHTML = `${Rob.display()}`;
}