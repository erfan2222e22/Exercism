const Yacht = () => {
    
    const score = (array, string) => {
        const numberString = {
            ones: nums(array, 1),
            Twos: nums(array, 2),
            threes: nums(array, 3),
            fours: nums(array, 4),
            fives: nums(array, 5),
            sixes: nums(array, 6),
            "full house": fullHouse(array),

            "four of a kind": littleStraight(array),

            "little straight": straights({
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0
            }, array),

            "big straight": straights({
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
            }, array),

            choice: calculator(array),
            
            yacht: yacht(array),
        };

        return numberString[string]
    }

    const fullHouse = (array) => {
        const fristNumber = array[0];
        const fristRest = array.filter((item) => item === fristNumber);
        const secendRest = array.filter((item) => item !== fristNumber);
        if (new Set([...array]).size === 3) return 0;

        if (((fristRest.length === 2 && secendRest.length === 3) || fristRest.length === 3)
            && ((secendRest.length === 2 && fristRest.length === 3) || secendRest.length === 3)) {
            return [...fristRest, ...secendRest].reduce((a, b) => a + b);
        } else return 0;
    };

    const littleStraight = (array) => {
        const fristHalfArray = [];
        const secendHalfArray = [];
        const maxNumberLenght = 4;

        for (let i in array) {
            if (array[i] === array[0] && secendHalfArray.length + 1 <= 4) secendHalfArray.push(array[i]);
            else fristHalfArray.push(array[i])
        }
       
        if (fristHalfArray.length < maxNumberLenght
            && secendHalfArray.length < maxNumberLenght) return 0;
        
        if (fristHalfArray.length >= maxNumberLenght) return calculator(fristHalfArray);
        else if (secendHalfArray.length >= maxNumberLenght) return calculator(secendHalfArray);
    };

    const straights = (numberList,array) => {
        for (let i in numberList)
            for (let c in array) if (i == array[c]) numberList[i]++
        return Object.values(numberList).every((item) => item === 1) ? 30 : 0;
    }

    const yacht = (array) => array.every((item) => item === array[0]) ? 50 : 0;

    const calculator = (array) => array?.reduce((a, b) => a + b)

    const nums = (array, number) => {
        const filterItems = array.filter((item) => item === number)
        let result = 0;
        for (let i in filterItems) result += filterItems[i];
        return result;
    }

    const input = [1, 4, 1, 4, 1]
    const input2 = "fours";

    return (
        <div onClick={() => console.log(score(input,input2))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
};
export default Yacht