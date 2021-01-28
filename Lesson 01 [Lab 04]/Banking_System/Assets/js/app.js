class Account {
    constructor(balance = 0, track = true) {
      this.balance = balance;
      this.track = track;
    }
    deposit(amount) {
        this.balance += parseInt(amount);
    }
    withdraw(amount) {
        if (this.balance - amount < 50){
            console.log("You can't withdraw " + amount + " birr. because your account has to have a minimum of 50birr.")
            this.track = false;
        }
        else {
            this.track = true;
            this.balance -= parseInt(amount);
        }  
    }
    checkbalance() {
        return this.balance
    }
    transfer(amount, account) {
        if (this.balance - amount < 50){
            console.log("You can't transfer " + amount + " birr. because your account has to have a minimum of 50birr.")
        }
        else {
            this.withdraw(amount)
            account.deposit(amount)
        }  
    }
  }
// biruk = new Account()
// tolosa = new Account()
// biruk.deposit(500)
// tolosa.deposit(300)
// biruk.transfer(460, tolosa)
// console.log(biruk.checkbalance())
// console.log(tolosa.checkbalance())

var input1;
var input2;
var reinput;
var re = true;
var user1;
var user2;

(function() {
    user1 = new Account()
    user2 = new Account()
    var temp = user1;
    var operation;
    while (re == true) {
        users = prompt("Choose 1 for first Account 2 for the Second account: ")
        if (users == "1") {
            user1 = temp
        }
        else if (users == "2") {
            user1 = user2

        }
        else {
            console.log("Invalid Input")
        }
    
        operation = prompt("Enter 1 deposit 2 to withdraw 3 to check your balance 4 to transfer")
        if (operation == "1") {
            deposit()
        }
        else if (operation == "2") {
            withdraw()
        }
        else if (operation == "3") {
            checkbalance()
        }
        else if (operation == "4") {
            transfer()
        }
    }


    })();
    function deposit() {
        input1 = prompt("Enter the amount you want to deposit: ");
        user1.deposit(parseInt(input1))
        reinput = prompt("If your done type 'quit'. If you want to deposit again type any letter.")
        if (reinput == "quit") {
            re = false;
        }
    }
    function withdraw() {
        input1 = prompt("Enter the amount you want to withdraw: ");
        user1.withdraw(parseInt(input1))
        reinput = prompt("If your done type 'quit'. If you want to withdraw again type any letter.")
        if (reinput == "quit") {
            re = false;
        }
    }
    function checkbalance() {
        console.log(user1.checkbalance())
        reinput = prompt("If your done type 'quit'. If you want to deposit again type any letter.")
        if (reinput == "quit") {
            re = false;
        }
    }
    function transfer() {
        input1 = prompt("Enter the amount you want to transfer to the other user: ");
        user1.withdraw(parseInt(input1))
        if (user1.track == true) {
            user2.deposit(parseInt(input1))
        }
        reinput = prompt("If your done type 'quit'. If you want to deposit again type any letter.")
        if (reinput == "quit") {
            re = false;
        }
    }