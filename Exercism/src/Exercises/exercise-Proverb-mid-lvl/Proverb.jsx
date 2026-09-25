const Proverb = () => {
    
    const proverb = (...string) => {
        const result = []
        const filterObjectItem = string.filter((item) => typeof item === "object");
        const lastText = `And all for the want of a ${string[0]}.`;

        if (string.length === 1) {
            return lastText
        } else if (string.length === 0) {
            return ""
        }

        for (let i = 0; i < string.length; i++) {
            const fristItem = string[i];
            const secendItem = string[i + 1];

            if ((fristItem != null && secendItem != null) &&
                (typeof secendItem === "string" && typeof fristItem === "string")) {
                const string1 = `For want of a ${string[i]} the ${string[i + 1]} was lost.`;
                result.push(string1);
            }
        }

        result.push(filterObjectItem.length > 0 ? `And all for the want of a ${filterObjectItem[0].qualifier} ${string[0]}.` : lastText)
        const stringAarray = result.join("\n") + "\n"
        return stringAarray.split("").filter((item, index) => index < stringAarray.length - 1).join("")
    };
    const input = "nail"
    const input2 = "shoe"
    const input3 = { qualifier: 'horseshoe' }
    return (
        <div onClick={() => console.log(proverb(input, input2, input3))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
}
export default Proverb