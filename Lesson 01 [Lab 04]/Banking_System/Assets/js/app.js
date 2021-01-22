class Account {
    constructor(balance = 0) {
      this.balance = balance;
    }
    deposit(amount) {
        this.balance += parseInt(amount);
    }
    withdraw(amount) {
        if (this.balance - amount < 50){
            console.log("You can't withdraw " + amount + " birr. because your account has to have a minimum of 50birr.")
        }
        else {
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

