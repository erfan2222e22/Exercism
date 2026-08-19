const Scrabble_Score = () => {

    const scrabble_Score = (input) => {
        const string = input.toUpperCase()
        let counter = 0;

        const object = {
            1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
            2: ["D", "G"],
            3: ["B", "C", "M", "P"],
            4: ["F", "H", "V", "W", "Y"],
            5: ["K"],
            8: ["J", "X"],
            10: ["Q", "Z"],
        };

        for (let i in string) {
            for (let c in object){
                for (let x in object[c]) {
                    if (string[i]===object[c][x]) {
                        counter += +c;
                    }
                    
                }
            }
        }

        return counter;

    }
    const input = "zoo";   
    return (
        <div onClick={() => console.log(scrabble_Score(input))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
  )
}
export default Scrabble_Score 