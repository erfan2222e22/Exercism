const Alphametics = () => {
  const solve = (puzzle) => {
    const [left, right] = puzzle.split("==").map((s) => s.trim());
    const addends = left.split("+").map((s) => s.trim());
    const words = [...addends, right];

    const letters = [...new Set(puzzle.replace(/[^A-Z]/g, ""))];
    const leading = new Set(words.map((w) => w[0]));

    const map = {};
    const used = new Array(10).fill(false);
    const solotions = [];

    const value = (word) =>
      [...word].reduce((acc, ch) => acc * 10 + map[ch], 0);

    const backtrack = (index) => {
      if (index === letters.length) {
        const sum = addends.reduce((s, w) => s + value(w), 0);
        if (sum === value(right)) {
          solotions.push({ ...map });
        }
        return;
      }

      const letter = letters[index];

      for (let d = 0; d <= 9; d++) {
        if (used[d]) continue;
        if (d === 0 && leading.has(letter)) continue;

        map[letter] = d;
        used[d] = true;

        backtrack(index + 1);

        used[d] = false;
        delete map[letter];
      }
    };

    backtrack(0);
    return solotions[0] === undefined ? null : solotions[0];
  };

  const input = "A == B";
  return (
    <div
      onClick={() => console.log(solve(input))}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#0d0d0d",
        color: "#fff",
        fontSize: "2rem",
        borderRadius: "1rem",
      }}
    >
      test me
    </div>
  );
};

export default Alphametics;
