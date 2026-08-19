const Camicia = () => {
 
  const simulateGame = (cards1, cards2) => {
  const decks = [[...cards1], [...cards2]];

  const penaltyCards = {
    J: 1,
    Q: 2,
    K: 3,
    A: 4,
  };

  const pile = [];
  const seen = new Set();

  let turn = 0; // 0 => player A, 1 => player B
  let cards = 0;
  let tricks = 0;

  let penalty = 0;
  let collector = null;

  const normalize = (deck) =>
    deck
      .map((card) => (penaltyCards[card] ? card : "#"))
      .join("");

    while (true) {
      if (penalty === 0 && pile.length === 0) {
        const state =
          normalize(decks[0]) +
          "|" +
          normalize(decks[1]) +
          "|" +
          turn +
          "|" +
          penalty;

        if (seen.has(state)) {
          return {
            status: "loop",
            cards,
            tricks,
          };
        }
        seen.add(state);
      }

    const current = decks[turn];
    const opponent = decks[1 - turn];

    // بازیکن کارت ندارد
    if (current.length === 0) {
      if (pile.length) {
        opponent.push(...pile);
        pile.length = 0;
        tricks++;
      }

      return {
        status: "finished",
        cards,
        tricks,
      };
    }

    const card = current.shift();

    pile.push(card);
    cards++;

    // کارت جریمه
    if (penaltyCards[card]) {
      penalty = penaltyCards[card];
      collector = turn;
      turn = 1 - turn;
      continue;
    }

    // در حال پرداخت جریمه هستیم
    if (penalty > 0) {
      penalty--;

      if (penalty === 0) {
        decks[collector].push(...pile);
        pile.length = 0;

        tricks++;

        if (
          decks[collector].length ===
          decks[0].length + decks[1].length
        ) {
          return {
            status: "finished",
            cards,
            tricks,
          };
        }

        turn = collector;
      }

      continue;
    }

    turn = 1 - turn;
  }
};

 const playerA = [
      '2', '8', '4', 'K', '5', '2', '3', 'Q', '6', 'K',
      'Q', 'A', 'J', '3', '5', '9', '8', '3', 'A', 'A',
      'J', '4', '4', 'J', '7', '5',
    ];
    const playerB = [
      '7', '7', '8', '6', '10', '10', '6', '10', '7', '2',
      'Q', '6', '3', '2', '4', 'K', 'Q', '10', 'J', '5',
      '9', '8', '9', '9', 'K', 'A',
  ];
  
  return (
    <div onClick={() => console.log(simulateGame(playerA, playerB))} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
     
      test me if you want 
    </div>
  )
}
export default Camicia;
