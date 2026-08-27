const Acronym = () => {
    
    const parse = (string) => {
        const res = [];
        const s = string.replace(/[-_]/, " ")
        const array = s.split(" ")
        for (let i in array) {
            res.push(array[i].toUpperCase()[0])
        };
        return res.join("")
    };

    const string = "The Road _Not_ Taken"
    return (
        <div onClick={() => console.log(parse(string))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
            
    )
};
export default Acronym