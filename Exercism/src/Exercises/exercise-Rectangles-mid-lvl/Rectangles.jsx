const Rectangles = () => {

    const count = (rows) => {
        const height = rows.length;
        if (height === 0) return 0;

        const width = rows[0].length;
        if (width === 0) return 0;

        // مرحله ۱: پیدا کردن همه‌ی نقاط '+' که می‌تونن گوشه باشن
        const corners = [];
        for (let r = 0; r < height; r++) {
            for (let c = 0; c < width; c++) {
                if (rows[r][c] === '+') {
                    corners.push([r, c]);
                }
            }
        }

        const isHorizontalEdge = (ch) => ch === '-' || ch === '+';
        const isVerticalEdge = (ch) => ch === '|' || ch === '+';

        let total = 0;

        // مرحله ۲: بررسی هر جفت گوشه به‌عنوان (بالا-چپ، پایین-راست)
        for (let i = 0; i < corners.length; i++) {
            const [r1, c1] = corners[i];

            for (let j = 0; j < corners.length; j++) {
                const [r2, c2] = corners[j];

                // باید واقعاً پایین‌تر و راست‌تر باشه
                if (r2 <= r1 || c2 <= c1) continue;

                // گوشه‌های دیگه هم باید '+' باشن
                if (rows[r1][c2] !== '+' || rows[r2][c1] !== '+') continue;

                let isValid = true;

                // بررسی خط بالا و پایین (افقی)
                for (let c = c1 + 1; c < c2 && isValid; c++) {
                    if (!isHorizontalEdge(rows[r1][c]) || !isHorizontalEdge(rows[r2][c])) {
                        isValid = false;
                    }
                }

                // بررسی خط چپ و راست (عمودی)
                for (let r = r1 + 1; r < r2 && isValid; r++) {
                    if (!isVerticalEdge(rows[r][c1]) || !isVerticalEdge(rows[r][c2])) {
                        isValid = false;
                    }
                }

                if (isValid) total++;
            }
        }
        return total;
    }

    const string =
        ' _ \n' +
        '|_|\n' +
        ' _|\n' +
        '   '
    return (
        <div onClick={() => console.log(count(string))} style={{
            display: "flex",
            flexDirection: "column", width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem"
        }}>
            test1
        </div>
    )
}
export default Rectangles