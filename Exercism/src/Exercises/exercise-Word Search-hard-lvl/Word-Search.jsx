const WordSearch = () => {
  
  class wordSearch {
    constructor(grid) {
      this.grid = grid;
    }

    find(words) {
      const result = {};
      for (const word of words) {
        result[word] = this.findWord(word);
      }
      return result
    }

    findWord(word) {
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1],  
      ];

      for (let y = 0; y < this.grid.length; y++) {
        for (let x = 0; x < this.grid[y].length; x++) {
          for (const [dx, dy] of directions) {
            const endX = x + dx * (word.length - 1);
            const endY = y + dy * (word.length - 1);
            if (this.matche(word, x, y, dx, dy)) {
              return {
                  start: [y + 1, x + 1],
                  end: [endY + 1, endX + 1],
              };
            }
          }
        }
      }

      return undefined
    }
    matche(word, x, y, dx, dy) {
      for (let i = 0; i < word.length; i++) {
        const row = this.grid[y + dy * i];
        if (row === undefined) return false;
        if (row[x + dx * i] !== word[i]) return false;
      }
      return true;
    }
  }
  const grid = ["mtclojurer"];
  const needTofinde = ["clojure"];
  const show = new wordSearch(grid);

  return (
    <div
      onClick={() => console.log(show.find(needTofinde))}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#0c0c0c",
        color: "#fff",
        textAlign: "center",
        fontSize: "2rem",
        borderRadius: "1rem",
      }}
    >
      test me
    </div>
  );
};

export default WordSearch;
