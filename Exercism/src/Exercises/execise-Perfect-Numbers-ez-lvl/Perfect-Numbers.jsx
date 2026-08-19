const Perfect_Numbers = () => {

  const classify = (number) => {
    let result = "";
    
    if (number <= 0) {
      throw new Error("lassification is only possible for natural numbers.")
    }

    const arrayNumbers = Array.from({ length: number === 1 ? 1 : number - 1}, (a, i) => i + 1);
    const gatherNumberArray = arrayNumbers.map((item) => number % item === 0 ? item : "")
      .filter((item) => item != "")?.reduce((a, b) => a + b)


   if (gatherNumberArray === number&&number>1) {
      result = "perfect"
    } else if (gatherNumberArray > number&&number>1) {
      result="abundant"
    } else {
      result="deficient "
    }
    return result
    
  }
  const number = 33550337;
  return (
      <div onClick={() => console.log(classify(number))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
     idk
        </div>
  )
}

export default Perfect_Numbers