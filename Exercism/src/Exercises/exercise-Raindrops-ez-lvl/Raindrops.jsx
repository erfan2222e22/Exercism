
const Raindrops = () => {
    
    const raindrops = (num) => {
        const array = [];
        const object = {
            '3': "Pling",
            "5": "Plang",
            "7": "Plong",
        }

        for (let i in object) array.push(num % +i === 0 ? object[i] : "");
        return array.join("").length > 0 ? array.join("") : num.toString();
    };

    const num = 1;

    return (
        <div onClick={() => console.log(raindrops(num))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
}
export default Raindrops