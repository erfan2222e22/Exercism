const Spiral_Matrix = () => {
    const spiralMatrix = (number) => {

        const matrix = Array.from({ length: number }, () => new Array(number).fill(0));
       
        let top = 0;
        let bottom = number - 1;
        let left = 0;
        let right = number - 1;
        let counter = 1;


        while (top <= bottom && left <= right) {
            for (let col = left; col <= right; col++) {
                matrix[top][col] = counter++;
            }
            top++

            for (let col = top; col <= bottom; col++) {
                matrix[col][right] = counter++;
            }
            right--

            if (top <= bottom) {
                for (let col = right; col >= left; col--) {
                    matrix[bottom][col] = counter++;
                }
                bottom--;
            }

            if (left <= right) {
                for (let row = bottom; row >= top; row--) {
                    matrix[row][left] = counter++;
                }
                left++;
            }

        }
    
    }
    const number = 1;
    
    return (
        <div onClick={() => console.log(spiralMatrix(number))} style={{
            display: "flex",
            flexDirection: "column", width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem"
        }}>
            test1
        </div>
    )
}
export default Spiral_Matrix