const Prime_Factors = () => {
    const primeFactors = (number) => {
        
        const res = [];
        let num = number;
        let counter = 2;

        while (num > 1) {
            if (num % counter === 0) {
                num = num / counter;
                res.push(counter)
            } else {
                counter++;
            }
            if (counter > num) {
                break;
            }
        }

        return res
        
    }
    const number = 1
    return (
        <div onClick={() => console.log(primeFactors(number))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
}
export default Prime_Factors