const Grains = () => {
    const square = (n) => {
        if (n < 1 || n > 64) {
            throw new Error('square must be between 1 and 64');
        }
        return 2n ** BigInt(n - 1);
    };

    const total = () => {
        return 2n ** 64n - 1n;
    };

    return (
        <div onClick={() => console.log(square(3))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem", padding: "1px", display: "flex", gap: '2px' }}>
            test me 
        </div>
    )
}
export default Grains