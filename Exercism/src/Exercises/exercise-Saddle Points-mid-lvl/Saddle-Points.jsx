const Saddle_Points = () => {

    const saddlePoints = (array) => {
        const maxNumbersLocations = [];
        const result = []
        const lengthArray = array.length;
 
        for (let column = 0; column < array.length; column++) {
            const maxNumberColumn = Math.max(...array[column]);
            const index = array[column].indexOf(maxNumberColumn);
            const filterDuplicatedNumbers = array[column].filter((item) => item === maxNumberColumn);

            if (filterDuplicatedNumbers.length === 3) {
                maxNumbersLocations.push(
                    [column, index],
                    [column, index + 1],
                    [column, index + 2]
                );
            } else {
                maxNumbersLocations.push([column, index])
            }
        }  

        if (lengthArray > 1 && lengthArray <= 3) {

            for (let i = 0; i < maxNumbersLocations.length; i++){
                const [column, index] = maxNumbersLocations[i];
                const numebr = array[column][index];
                const lengthArray3 = lengthArray === 2;
       
                const conditions = [
                    {
                    condition: column === 0
                        && numebr <= array[column + 1][index] && numebr <=
                        array[lengthArray3 ? column : column + 2][index]
                    },
                    {
                        condition: column === 1 && numebr <=
                        array[lengthArray3 ? column : column + 1][index] && numebr <=
                        array[lengthArray3 ? column : column - 1][index]
                    },
                    {
                        condition: column === 2 &&
                            numebr <= array[column - 1][index] && numebr <= array[column - 2][index]
                    }
                
                ]
                for (let counter in conditions){
                    if (conditions[counter]?.condition) {
                        result.push({
                            row: column === 1 && lengthArray === 2 ?
                                column : column + 1, column: index + 1
                        });
                    }
                }
            }
        }

        if (lengthArray === 1 || lengthArray === 4) {
            const lengthArray4 = lengthArray === 4;
            const copyArray = lengthArray4 ? [[...array].flat()] : [...array];
            const minOrmax = lengthArray4 ? Math.min(...copyArray[0])
                : Math.max(...copyArray[0]);

            for (let i in copyArray) {  
                for (let c in copyArray[i]){
                    if (copyArray[i][c] === minOrmax) {
                        if (lengthArray4) {
                            result.push({ row: +c + 1, column: +i + 1})
                        } else {
                            result.push({ row: +i + 1, column: +c + 1})
                        }
                   }
                }
            }
        }

        return result
    }

    const array = [
      [2, 5, 3, 5]
    ];
    return (
        <div onClick={() => console.log(saddlePoints(array))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me if you want
        </div>
    )
};

export default Saddle_Points