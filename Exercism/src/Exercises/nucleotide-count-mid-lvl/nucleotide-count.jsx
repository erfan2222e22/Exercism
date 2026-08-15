

const Nucleotide_count = () => {
    const nucleotide_count = (string) => {
    
        const Condition = string.split("");
        let show = Condition.find((item) => item !== "" && item !==
            "A" && item !== "C" && item !== "G" && item !== "T");
        if (show != null) {
            throw new Error("Invalid nucleotide in strand")
        }

        const object = {
            'A': 0,
            'C': 0,
            'G': 0,
            'T': 0,
        }

        for (let i in string) {
            for (let c in object){
                if (string[i] === c) {
                    object[c]++;
                }
            }
        }
        
        return Object.values(object).join(" ")
    }
    const string = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC1"
    return (
        <div onClick={() => console.log(nucleotide_count(string))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
  )
}
export default Nucleotide_count