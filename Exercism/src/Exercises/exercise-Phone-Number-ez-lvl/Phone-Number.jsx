const Phone_Number = () => {
    const clean = (string) => {
        const ConditionsString = ["-", "(", ")", ".", " ", "+"];
        const filterd = [...string].filter((item) => {
            return string.length >= 10 && string[0] === "1" || string[0] === "+" ? ![...ConditionsString, "1"].includes(item) :
            !ConditionsString.includes(item)
        });
        
        const findeIndexParensLeft = string[string.indexOf("(") + 1]
        const findeIndexParensRight = string[string.indexOf(")") + 2]
        const replaceString = string.replace(/[(),\s-]/g, "")
     
        const ConditionsList = [
            { condition: replaceString.length < 10, error: "Must not be fewer than 10 digits" },
            { condition: filterd.length === 11 && !filterd.join("") === string, error: "11 digits must start with 1" },
            { condition: filterd.length > 11, error: "Must not be greater than 11 digits" },
            { condition: /[a-b]/g.test(string), error: "Letters not permitted" },
            { condition: /[@:!]/g.test(string), error: "Punctuations not permitted" },
            {
                condition: findeIndexParensLeft === "0" &&
                    (replaceString.length !== 11 || replaceString.length === 11),
                error: "Area code cannot start with zero"
            },
            {
                condition: string.indexOf("(") !== -1 && findeIndexParensLeft === "1" && filterd.length !== 11,
                error: "Area code cannot start with one"
            },
            { condition: findeIndexParensRight === "0", error: "Exchange code cannot start with zero" },
            { condition: findeIndexParensRight === "1", error: "Exchange code cannot start with one" },
        ];

        for (let i in ConditionsList){
            if (ConditionsList[i].condition) {
                throw new Error(ConditionsList[i].error)
            }
        }

        return filterd.join("")
    }
    const string = "1 (123) 456-7890";
    return (
        <div onClick={() => console.log(clean(string))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
};
export default Phone_Number