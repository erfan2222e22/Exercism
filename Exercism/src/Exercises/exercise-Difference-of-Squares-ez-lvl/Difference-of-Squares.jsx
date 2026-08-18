const Difference_of_Squares = () => {

    class Squares {
        constructor(squares) {
            this.sumOFSquares = squares;
            this.squareOFSum = squares;
        }

        get sumOfSquares() {
            let res = 0
            let counter = 0;
            while (counter <= this.sumOFSquares) {
                res += (counter * counter)
                counter++
            }

            return res;
        }

        get squareOfSum() {
            let res = 0;
            let counter = 0;
            while (counter <= this.squareOFSum) {
                res += (counter * counter * counter)
                counter++;
            }
            return res
        }

        get difference() {
            let res = 0;
            return this.squareOfSum >= this.sumOfSquares ? res = this.squareOfSum - this.sumOfSquares
                : res = this.sumOfSquares - this.squareOfSum;
            
        }
    }

    const squares5 = new Squares(5);
     return (
        <div onClick={() => console.log(squares5.difference)} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
     idk
        </div>
     )
}

export default Difference_of_Squares