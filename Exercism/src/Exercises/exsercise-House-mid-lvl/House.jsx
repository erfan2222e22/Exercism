const House = () => {
    
 class House {
  static verse(number) {
       if (number === 1) {
            return ['This is the house that Jack built.']
        }
        const result = [];
        const thingsList =
            [
               "house","malt", "rat", "cat",
                "dog", "cow", "maiden",
                "man", "priest", "rooster",
                "farmer", "horse",
            ]
        
        const thingsExplanationList = {
            house: "that lay in the house that Jack built.",
            malt: "that ate the malt",
            rat: "that killed the rat",
            cat: "that worried the cat",
            dog: "that tossed the dog",
          
             cow: `${number === 6 ? "that is the cow with the crumpled horn"
                : "that milked the cow with the crumpled horn"
                }`,
          
            maiden: `${number===7?"This is the maiden all forlorn":"that kissed the maiden all forlorn"}`,
          
            man:`${number===8?"that is the man all tattered and torn":"that married the man all tattered and torn"}`,
          
          
          priest:`${number===9?"that is the priest all shaven and shorn":"that woke the priest all shaven and shorn"}`,


          
            rooster: `${number===10?"that is the rooster that crowed in the morn":"that kept the rooster that crowed in the morn"}`,

            farmer:  `${number===11?"This is the farmer sowing his corn":"that belonged to the farmer sowing his corn"}`,

            horse: `${number===12?"This is the horse and the hound and the horn":"that kept the rooster that crowed in the morn"}`,
        };
        
        const fristText = number <= 5 ? `This is the ${thingsList[number - 1]}`
            : `${thingsExplanationList[thingsList[number - 1]].replace(/that/, "This")}`;
        
        for (let i = number - 1; i >= 0; i--) {
            if (i !== number - 1 ) {
                result.push(thingsExplanationList[thingsList[i]])
            }

        }
        result.unshift(fristText);
        return result
  }


  
  static verses(number1, number2) {
 const textList = [];
        const result = [];
        while (number1 <= number2) {
            textList.push(this.verse(number1))
            number1++
        }

        textList.forEach((item) => {
            item.forEach((b) => {
                result.push(b);
            })
            result.push("")
        });

        return result.filter((item, index) => index !== result.length-1);
  }
  
}

    const cal = new House();

    return (
        <div onClick={() => console.log(cal)} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me if you want
        </div>
    );
}
export default House