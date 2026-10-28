const Dominoes = () => {
  const canChain = (dominoes) => {
    if (!dominoes.length) return true
    const used = Array(dominoes.length).fill(false)
    const search = (need, left) => {
      if (left === 0) return need === start
      for (let i = 0; i < dominoes.length; i++) {
        if (used[i]) continue
        const [a, b] = dominoes[i]
        if (a !== need && b !== need) continue
        used[i] = true
        if (search(a === need ? b : a, left - 1)) return true
        used[i] = false
      }
      return false
    }
    const start = dominoes[0][0]
    used[0] = true
    return search(dominoes[0][1], dominoes.length - 1)
  }

  return (
    <div
      onClick={() => console.log(canChain([[1, 2], [2, 3], [3, 1]]))}
      style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}
    >
      test me
    </div>
  )
}

export default Dominoes
