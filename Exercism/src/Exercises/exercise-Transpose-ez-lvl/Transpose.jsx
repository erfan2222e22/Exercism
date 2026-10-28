const Transpose = () => {
  const transpose = (input) => {
    if (!input.length) return []
    const width = Math.max(...input.map((row) => row.length))
    return Array.from({ length: width }, (_, col) =>
      input
        .map((row) => (col < row.length ? row[col] : " "))
        .join("")
        .replace(/ +$/, "")
    )
  }

  const input = ["ABC", "DE"]
  return (
    <div
      onClick={() => console.log(transpose(input))}
      style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}
    >
      test me
    </div>
  )
}

export default Transpose
