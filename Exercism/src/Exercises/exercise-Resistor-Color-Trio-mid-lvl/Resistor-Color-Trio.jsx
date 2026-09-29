const Resistor_Color_Trio = () => {
    class ResistorColorTrio {
        constructor(array) {
            this.array = array;
            this.label = this.cal()
        }

        cal() {
            let array = [...this.array];

            if (array.length > 3) array.pop();

            let counterWhile = 0;
            let metricPrefix = "";

            const colorsList = {
                black: 0,
                brown: 1,
                red: 2,
                orange: 3,
                yellow: 4,
                green: 5,
                blue: 6,
                violet: 7,
                grey: 8,
                white: 9
            };

            const [frist, secend] = array;

            if (
                colorsList[frist] == null ||
                colorsList[secend] == null
            ) {
                // return "/invalid color/";
                throw new Error("/invalid color/")
            }

            const totalColors = [
                colorsList[frist],
                colorsList[secend]
            ];

            for (let i = 2; i < array.length; i++) {
                while (counterWhile < colorsList[array[i]]) {
                    totalColors.push(0);
                    counterWhile++;
                }
            }

            let value = +totalColors.join("");

            if (value < 1000) {
                metricPrefix = "ohms";
            } else if (value >= 1000 && value <= 999999) {
                value = value / 1000;
                metricPrefix = "kiloohms";
            } else if (value < 1000000000) {
                value = value / 1000000;
                metricPrefix = "megaohms";
            } else {
                value = value / 1000000000;
                metricPrefix = "gigaohms";
            }

            return `Resistor value: ${value} ${metricPrefix}`;
        }
    }
    
    const input = ['yellow', 'purple', 'black']
    const show = new ResistorColorTrio(input);

    return (
        <div onClick={() => console.log(show.label)} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
    )
};
export default Resistor_Color_Trio