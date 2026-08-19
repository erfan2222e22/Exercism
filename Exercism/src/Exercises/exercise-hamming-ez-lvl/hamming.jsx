const Hamming = () => {

    const hamming = (string1, string2) => {
        
        const lengthStirng1 = string1.length;
        const lengthStirng2 = string2.length;
        const avergeLength = Math.floor((lengthStirng1 + lengthStirng2) / 2);
        let counterLoop = 0;
        let result = 0;

        if (lengthStirng1 !== lengthStirng2) {
            throw new Error("kiram kose madrt")
        } else if (lengthStirng1 === 0 || lengthStirng2 === 0) {
            return 0;
        }

        while (counterLoop < avergeLength) {
            if (string1[counterLoop] !== string2[counterLoop]) {
                result++
            }
            counterLoop++;
        }
        return result;
    }

    const string = "1";
    const string2= "1";

    return (
        <div onClick={() => console.log(hamming(string, string2))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
      test me if you want 
    </div>
  )
}
export default Hamming