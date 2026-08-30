const Matching_Brackets = () => {
    const isPaired = (string) => {
        
        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{',
        };
        const openers = new Set(['(', '[', '{']);

        const stack = [];

        for (const char of string) {
    
            if (openers.has(char)) {
                stack.push(char);
            } else if (char in pairs) {
                if (stack.pop() !== pairs[char]) {
                    return false;
                }
            }
        }

        return stack.length === 0;

    };

    const string = "([{}({}[])])"
    return (
        <div onClick={() => console.log(isPaired(string))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
}
export default Matching_Brackets
// const brackest = [{ open: "{", close: "}", counterOpen: 0, counterClose: 0 },
//         { open: "[", close: "]", counterOpen: 0, counterClose: 0 }, { open: "(", close: ")", counterOpen: 0, counterClose: 0 }]
//         const arrayCloseList = [];
        

//         for (let i in string) {
//             for (let c in brackest) {
//                 if (string[0] === brackest[c].close) {
//                     return false;
//                 };

//                 if (string[i] === brackest[c].open) {
//                     brackest[c].counterOpen++;
//                     const filterCloseBrackest = [...string].filter((item) => item === brackest[c].close);
//                     brackest[c].counterClose = filterCloseBrackest.length
//                 } else if (string[i] === brackest[c].close) {
//                     arrayCloseList.push(brackest[c].close)
//                 }

//             }
//         }
//         console.log(brackest)
  
//         return brackest.every((item) => item.counterOpen === item.counterClose)
//             && brackest.reduce((sum, item) => sum + item.counterClose, 0) >= arrayCloseList.length ? true : false;