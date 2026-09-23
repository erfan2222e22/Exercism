const Pig_Latin = () => {
    const translate = (string) => {
        if (string.replace(/ /, "").length > 10) {
            const result = []
            const splitedString = string.split(" ");
            for (let i in splitedString) {
                result.push(logic(splitedString[i]))
            }
           return result.join(" ")
        }
        return logic(string)
    };

    const logic = (string) => {
        const pigText = "ay";
        const pigletters = new Set(["a", "e", "i", "o", "u"]);
        let array = [...string];   
        const fristIndex = string[0];
        const secendIndex = string[1];

        if ((fristIndex === "y" && secendIndex === "t")
            || (fristIndex === "x" && secendIndex === "r"))  return  string + pigText;


        if (!/[a,e,i,o,u]/.test(string) && /[y]/g.test(string)) {
            const indexY = array.indexOf("y");
            const filterIndexLessThanY = array.filter((_, i) => i < indexY);
            array.push(...filterIndexLessThanY)
            for (let i = indexY - 1; i >= 0; i--) array[i] = "";
            return  array.join("") + pigText;
        }
        
        for (let i = 0; i < array.length; i++){

            if (array[i] === "q" && array[i + 1] === "u") {
                array.push(array[i], array[i + 1]);
                array[i] = "";
                array[i + 1] = "";
                return  array.join("") + pigText;
            }

            if (pigletters.has(array[i])) return  array.join("") + pigText;
            else {
                array.push(array[i])
                array[i] = "";
            }
        }
        
    };

    const string = "quick fast run";
    return (
        <div onClick={() => console.log(translate(string))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
}
export default Pig_Latin