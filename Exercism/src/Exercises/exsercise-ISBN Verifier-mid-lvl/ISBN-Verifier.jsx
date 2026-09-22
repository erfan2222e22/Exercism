const ISBN_Verifier = () => {

    const isValid = (string) => {
        let number = 0;
        let counter = 10;
        
        if (/[X]/.test(string)) {
            string = string.replace(/[X]/g, "");
            number = 10;
        }

        const array = [...string.replace(/[-]/g, "")].map((item) => +item);

        if (array.every((item) => item == 0) || (array.length !== counter && number !== counter)) {
            return false
        }        

        for (let i = 0; i < array.length;i++){
            number += array[i] * counter;
            counter--
        }   

        return number % 11 === 0 
    };

    const string = "3-598-21507-X"

    return (
        <div onClick={() => console.log(isValid(string))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me if you want
        </div>
    )
}
export default ISBN_Verifier