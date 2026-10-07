const Say = () => {
  const solve = (number) => {
    const stringNumber = number.toString()
    const result = [];
    const findNumber = (i, n) => {
      const numberList = {
        "1": simpleNumbers[n],
        "2": TensPlaceNumbers[n],
        "3": `${simpleNumbers[n]} hundred`,
        "4": `${simpleNumbers[n]} thousand`,
        "7": `${simpleNumbers[n]} million`,
        "10": `${simpleNumbers[n]} billion`,
      }
      return numberList[i]
    }

    const simpleNumbers = {
      "0": "zero",
      "1": "one",
      "2": "two",
      "3": "three",
      "4": "four",
      "5": "five",
      "6": "six",
      "7": "seven",
      "8": "eight",
      "9": "nine",
      "10": "ten",
      "11": "eleven",
      "12": "twelve",
      "13": "thirteen",
      "14": "fourteen",
      "15": "fifteen",
      "16": "sixteen",
      "17": "seventeen",
      "18": "eighteen",
      "19": "nineteen",
    }
    const TensPlaceNumbers = {
      "2": "twenty-",
      "3": "thirty-",
      "4": "forty-",
      "5": "fifty-",
      "6": "sixty-",
      "7": "seventy-",
      "8": "eighty-",
      "9": "ninety-",
    };

    if (number < 20) return simpleNumbers[stringNumber]
    
    
    for (let i in stringNumber) {
      const dZero = stringNumber.replace(/[0]/g, "");
      if (stringNumber[i] !== "0") {
        result.push(findNumber(stringNumber.length - +i, stringNumber[i]))
        if (+i !== stringNumber.length - 2 && dZero.length >= 2) result.push(" ");
      }
    }
    
    const stringRes = result.join("");

    if (stringNumber.length === 2 && stringNumber[1] === "0") return stringRes.replace(/-/, "")

    return stringRes.replace(/ +$/, "");
  }

  const say = (number) => {
    const itemsList = {
      "9": "billion",
      "6":"million",
      "3":"thousand",
      "0":"",
    }

    const numberToArray = number.toString().split("");
    
    if (number < 0) throw new Error('Number must be between 0 and 999,999,999,999.')
    if (number > 999_999_999_999) throw new Error("Number must be between 0 and 999,999,999,999.")
    if (numberToArray.length < 11) return solve(numberToArray.join(""))
    
    const sliceArray = [];
    const result = [];
    
    for (let i = 0; i < numberToArray.length; i += 3) sliceArray.push(numberToArray.slice(i, i + 3))
    let sliceArrayLength = sliceArray.length * 3

    for (let i in sliceArray) {
      let callFunction = solve(sliceArray[i].join(""))
      const res=`${callFunction} ${itemsList[sliceArrayLength -= 3]} `
      result.push(res)
    }

    return result.join("").replace(/ +$/, "")
  }



  const number = 987654321123;

  return (
    <div onClick={() => console.log(say(number))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
      test me
    </div>
  )
}

export default Say