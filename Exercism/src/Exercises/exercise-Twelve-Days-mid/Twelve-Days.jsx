const  Twelve_Days=()=> {
    const logic = (number) => {
        if (number === 1) {
            return 'On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n'
        }

        const giftsList = [];

        const daysList = [
            "first",
            "second",
            "third",
            "fourth",
            "fifth",
            "sixth ",
            "seventh",
            "eighth",
            "ninth",
            "tenth",
            "eleventh",
            "twelfth"
        ];

        const daysGifts = {
            first: "and a Partridge in a Pear Tree.\n",
            second: "two Turtle Doves,",
            third: "three French Hens,",
            fourth: "four Calling Birds,",
            fifth: "five Gold Rings,",
            sixth: "six Geese-a-Laying,",
            seventh: "seven Swans-a-Swimming,",
            eighth: "eight Maids-a-Milking,",
            ninth: "nine Ladies Dancing,",
            tenth: "ten Lords-a-Leaping,",
            eleventh: "eleven Pipers Piping,",
            twelfth: "twelve Drummers Drumming,"
        }
 
        for (let i = number - 1; i >= 0; i--) {
            const string = `${daysGifts[daysList[i]]}`;
            giftsList.push(string);
        }

        return `On the ${daysList[number-1]} day of Christmas my true love gave to me: ${giftsList.join(" ")}`
    };

    const recite = (number1, number2) => {
        if (number2==null) {
            return logic(number1)
        }
        const result = [];
        while (number1 <= number2) {
            result.push(logic(number1))
            number1++
        }
        const c = [...result].join("\n");
        return c 
    }

    return (
        <div onClick={() => console.log(recite([1,2,3,4,5],4))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
  )
}
export default Twelve_Days