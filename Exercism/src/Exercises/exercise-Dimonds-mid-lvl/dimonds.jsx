const Dimonds = () => {
  
    const rows = (word) => {

        const alphabet = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G',
            'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U',
            'V', 'W', 'X', 'Y', 'Z'
        ]   
      
        const findIndex = alphabet.indexOf(word);
        const indexOf = (findIndex + 1) * 2;
        const array = Array.from(({ length: indexOf - 1 }), () => " ")
        const midArray = Math.floor((indexOf - 1) / 2)
        const res = Array.from({ length: midArray + 1 }, () => [...array])
        
      let cloneMidLeft = midArray;
      let cloneMid2Right = midArray;
      

      for (let i = 0; i < res.length; i++) {
        if (i !== 0) {
          cloneMid2Right += 1;
          cloneMidLeft -= 1;
          res[i][cloneMid2Right] = alphabet[i]
          res[i][cloneMidLeft] = alphabet[i]
        } else res[0][midArray] = "A";
      }

      const filterdLastLengt = res.filter((_, i) => i !== res.length - 1);
      for (let i = filterdLastLengt.length; i >= 0; i--) if (filterdLastLengt[i] != null) res.push(filterdLastLengt[i])
      const mappedRes = res.map((item) => item.join(""));
    
    
    return mappedRes
    }

    const letter = "Z";
  return (
       <div onClick={() => console.log(rows(letter))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
     idk
        </div>
  )
}
export default Dimonds