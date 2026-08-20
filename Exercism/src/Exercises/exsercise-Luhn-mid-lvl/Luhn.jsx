const Luhn = () => {
  const valid = (string) => {
    
    if (string.trim().length === 1 || /[a-z]|[-#$:%]/g.test(string)) {
      return false
    }
    
    const replaced = string.replace(/ /g, "").split("")
    
    for (let i = replaced.length - 2; i >= 0; i -= 2){
      let Condition = +replaced[i] <= 4 ? 0 : 9;
      replaced[i] = +replaced[i] * 2 - Condition;
    }
    
    return replaced.reduce((a, b) => +a + +b) % 10 === 0? true: false;
    
  };
  
  const string = "234 567 891 234"
    return (
        <div onClick={() => console.log(valid(string))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
  )
}
export default Luhn