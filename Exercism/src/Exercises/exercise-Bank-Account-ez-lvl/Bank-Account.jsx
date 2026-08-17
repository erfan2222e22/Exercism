
const Bank_Account = () => {
    
    class Bank  {
        
        #accountBlance = 0;
        #openedAccount = false;

        open() {
            if (!this.#openedAccount) {
                this.#openedAccount = true;
                this.#accountBlance = 0;
            } else {
                throw  new ValueError("close")
            }
        }

        close() {
            if (this.#openedAccount) {
            this.#openedAccount = false;
            this.#openedAccount = 0;  
            } else {
                 throw  new ValueError("close")
            }
              
        }

        deposit(money) {
            this.money = money;
            if (this.money<0) {
                throw new ValueError("close");
            }
            if (this.#openedAccount) {
                const plus = this.#accountBlance += money || 0;
                return this.#accountBlance = plus
            } else {
                throw  new ValueError("deposit")
            }
        }

        withdraw(money) {
            this.money = money;
            if (this.money < 0) {
                throw new ValueError("withdraw1");
            }


            if (this.#accountBlance >= this.money && this.#openedAccount) {
                this.#accountBlance = this.#accountBlance - this.money;
            } else {
                throw new ValueError("withdraw");
            };
        }
        get balance() {
            if (this.#openedAccount) {
                return this.#accountBlance;
            } else {
                throw new ValueError("balance");
            }
        }
    }
    class ValueError extends Error {
        constructor(error) {
            super(`Bank account ${error}`);
            this.error = error; 
        };
}

    const account = new Bank();
       account.open();
    account.deposit(100);
    account.withdraw(-50);
    return (
        <div onClick={() => console.log(account.balance)} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
  )
}
export default Bank_Account