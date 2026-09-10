const OCR_Numbers = () => {

    const convert = (input) => {

        const rows = input.split('\n');

        if (rows.length % 4 !== 0) {
            throw new Error('Invalid input');
        }

        if (rows.some(row => row.length % 3 !== 0)) {
            throw new Error('Invalid input');
        }

        const digits = {
            ' _ | ||_|   ': '0',
            '     |  |   ': '1',
            ' _  _||_    ': '2',
            ' _  _| _|   ': '3',
            '   |_|  |   ': "4",
            ' _ |_  _|   ': '5',
            ' _ |_ |_|   ': '6',
            ' _   |  |   ': '7',
            ' _ |_||_|   ': '8',
            ' _ |_| _|   ': '9'
        }
        const result = [];

        for (let row = 0; row < rows.length; row += 4) {
            let number = '';

            for (let col = 0; col < rows[row].length; col += 3) {

                const cell =
                    rows[row].slice(col, col + 3) +
                    rows[row + 1].slice(col, col + 3) +
                    rows[row + 2].slice(col, col + 3) +
                    rows[row + 3].slice(col, col + 3);
                number += digits[cell] ?? "?"
      
            }

            result.push(number);
        }

        return result.join(',');
    };


    const string =
   ' _ \n' +
        '|_|\n' +
        ' _|\n' +
        '   '

  return (
     <div onClick={() => console.log(convert(string))} style={{
            display: "flex",
            flexDirection: "column", width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem"
        }}>
            test1
        </div>
  )
}
export default OCR_Numbers