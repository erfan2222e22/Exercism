
const Etl = () => {
     
    const etl = (oldFormat) => {
        let newObject = {};
        for (let [keys, letters] of Object.entries(oldFormat)){
            for (let i in letters) {
               newObject[letters[i]?.toLowerCase()] = +keys
            }
        } 

        return newObject
    }

   const old = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z'],
    };
    
    return (
        <div onClick={() => console.log(etl(old))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
     
      test me if you want 
    </div>
  )
}
export default Etl