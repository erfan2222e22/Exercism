const Largest_Series_Product = () => {
    const largestProduct = (string, number) => {
        if (number < 0) {
            throw new Error('span must not be negative')
        } else if (string.length < number) {
            throw new Error("span must not exceed string length")
        } else if (/[a-z]/g.test(string)) {
            throw new Error('digits input must only contain digits')
        }

        const result = [];
        const numbersList = [];
        for (let i = 0; i <= string.length - number; i++) {
            numbersList.push(string.slice(i, i + number));
        }

        for (let item of numbersList){
            const i = item.split("").map(item => +item).reduce((a, c) => a * c, 1);
            result.push(i);
        }

        return Math.max(...result);
    };

    const string = "0123456789";
    const number = 2;

  return (
       <div onClick={() => console.log(largestProduct(string,number))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
  )
}
export default Largest_Series_Product