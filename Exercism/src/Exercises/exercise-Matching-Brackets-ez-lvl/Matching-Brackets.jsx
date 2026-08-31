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