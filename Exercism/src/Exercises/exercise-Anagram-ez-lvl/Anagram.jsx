const Anagram = () => {
    
    const findAnagrams = (input) => {
        const [string, [...array]] = input
        const res = []
        for (let i in array) {
            const lowCase = array[i].toLowerCase();

            if (lowCase !== string.toLowerCase() &&lowCase.split("").sort().join("")
                === string.toLowerCase().split("").sort().join("")) {
                res.push(array[i])
            }
        }

        return res

    }

    const input = ['nose', ['Eons', 'ONES']]
    return (
        <div onClick={() => console.log(findAnagrams(input))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
}
export default Anagram