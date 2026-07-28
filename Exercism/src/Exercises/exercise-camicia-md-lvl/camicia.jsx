const Camicia = () => {
  const solveExercise= (player1, player2) => {
     const center = [];
      const penaltyCards = { j: 1, q: 2, k: 3, a: 4 };
      const lengths = Math.floor(player1.length + player2.length);
      const cards1 = [...player1];
      const cards2 = [...player2];
     let status = "finished";
      let counterTakeCenter = 0;
      let counterUseCards = 0;

      for (let i = 0; i < lengths; i++) {
        if (player1[i] != null) {
          center.push(player1[i]);
          cards1[i] = "";
          counterUseCards++;

          const findeIndexPenaltyCardPlayer2 = player2.indexOf(
            player2[player1.indexOf(player1[i])],
          );

          const PenaltyCardsInPlayer2 = player2.filter(
            (item, index) =>
              index < penaltyCards[player1[i]] + findeIndexPenaltyCardPlayer2 &&
              index >= findeIndexPenaltyCardPlayer2,
          );

          if (/[j,q,k,a]/g.test(PenaltyCardsInPlayer2.join(" "))) {
            console.log(true);
          } else if (PenaltyCardsInPlayer2.length >= 1) {
            console.log(PenaltyCardsInPlayer2);
            console.log(`it is center ${center}`);
            cards2.push(...center, PenaltyCardsInPlayer2);
            counterTakeCenter++;
            center.length = 0;
          }
          if (
            cards1.every((item) => item === "") &&
            !cards2.every((item) => item === "")
          ) {
            cards2.push(...center);
            center.length = 0;
            counterTakeCenter++;
          }
        }
        if (player2[i] != null) {
          center.push(player2[i]);
          cards2[i] = "";
          counterUseCards++;

          const findeIndexPenaltyCardPlayer1 = player1.indexOf(
            player1[player2.indexOf(player2[i])],
          );

          const PenaltyCardsInPlayer1 = player1.filter(
            (item, index) =>
              index < penaltyCards[player2[i]] + findeIndexPenaltyCardPlayer1 &&
              index >= findeIndexPenaltyCardPlayer1,
          );

          if (/[j,q,k,a]/g.test(PenaltyCardsInPlayer1.join(" "))) {
            console.log(true);
          } else if (PenaltyCardsInPlayer1.length >= 1) {
            cards1.push(...center, PenaltyCardsInPlayer1);
            counterTakeCenter++;
            center.length = 0;
          }
          if (
            cards2.every((item) => item === "") &&
            !cards1.every((item) => item === "")
          ) {
            cards1.push(...center);
            center.length = 0;
            counterTakeCenter++;
          }
        }
      }
      console.log(`CARD1: ${cards1}`);
      console.log(`CARD2: ${cards2}`);
    console.log(`CENTER: ${center}`);


      return {
        status: status,
        cards: counterUseCards,
        tricks: counterTakeCenter,
      };
  }


  return (
    <div onClick={()=>solveExercise(["2", "4", "2", "2", "2", "2", "2"], ["3", "5", "6"])} style={{width:"100%",height:"100vh",backgroundColor:"#0c0c0c"}}>
    </div>
  )
}
export default Camicia