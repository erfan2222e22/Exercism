const Isogram = () => {
    
    const isIsogram = (string) => {
        const result = string.toLowerCase().replace(/-old/g, "old").replace(/[" "]/g, "")
        return [...new Set(string.toLowerCase())].join("").replace(/[" "]/g, "") === result ? true : false
    };

    return (
        <div onClick={() => console.log(isIsogram("eleven"))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
}

export default Isogram