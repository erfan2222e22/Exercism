const Forth = () => {
  const evaluate = (instructions) => {
    const stack = []
    const defs = {}
    const tokens = instructions.flatMap((line) => line.toLowerCase().split(/\s+/).filter(Boolean))

    const apply = (token) => {
      if (/^-?\d+$/.test(token)) {
        stack.push(Number(token))
        return
      }
      if (defs[token]) {
        defs[token].forEach(apply)
        return
      }
      const b = () => {
        if (!stack.length) throw new Error("Stack empty")
        return stack.pop()
      }
      switch (token) {
        case "+":
          stack.push(b() + b())
          break
        case "-": {
          const y = b()
          const x = b()
          stack.push(x - y)
          break
        }
        case "*":
          stack.push(b() * b())
          break
        case "/": {
          const y = b()
          const x = b()
          if (y === 0) throw new Error("Division by zero")
          stack.push(Math.trunc(x / y))
          break
        }
        case "dup": {
          const x = b()
          stack.push(x, x)
          break
        }
        case "drop":
          b()
          break
        case "swap": {
          const y = b()
          const x = b()
          stack.push(y, x)
          break
        }
        case "over": {
          const y = b()
          const x = b()
          stack.push(x, y, x)
          break
        }
        default:
          throw new Error(`Unknown word: ${token}`)
      }
    }

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === ":") {
        const name = tokens[++i]
        if (/^-?\d+$/.test(name)) throw new Error("Cannot redefine numbers")
        const body = []
        i++
        while (tokens[i] !== ";") body.push(tokens[i++])
        defs[name] = body
      } else {
        apply(tokens[i])
      }
    }
    return stack
  }

  return (
    <div
      onClick={() => console.log(evaluate(["1 2 +"]))}
      style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}
    >
      test me
    </div>
  )
}

export default Forth
