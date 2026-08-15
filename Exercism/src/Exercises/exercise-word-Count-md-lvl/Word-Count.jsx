
const Word_Count = () => {
    const word_Count = (string) => {    

        const replacing = string.toLowerCase().replace(/(?<![a-zA-Z])'|'(?![a-zA-Z])|[\n]|[.,:!&@$%^]/g, " ");
        const array = replacing.split(" ");
        const object = { }

        for (let i in array) {
            if (array[i] !== "") {
                object[array[i]] = 0
            }
        }

        for (let i in object) {
            for (let c in array){   
                if (i===array[c]) {
                    object[i]++;
                }
            }
        }

        return object
    }
    const input ="go Go GO Stop stop";
  return (
    <div onClick={() => console.log(word_Count(input))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
  )
}
export default Word_Count