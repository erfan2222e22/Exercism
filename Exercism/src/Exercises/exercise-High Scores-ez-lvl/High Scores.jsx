const High_Scores = () => {
 
    class HighScores {

  constructor(scores) {
      this.scores = scores;
  }

  get latest() {
      return this.scores[this.scores.length - 1];
  }

     get personalBest() {
         let number = this.scores[0] > this.scores[1] ? this.scores[0] :  this.scores[1];
         for (let i = 0; i < this.scores.length; i += 2) {
             
             let fristItem = this.scores[i];
             let secendItem = this.scores[i - 1];

             if (secendItem > fristItem && secendItem > number) {
                 number = secendItem;
             } else if (fristItem > this.scores[i - 1] && fristItem > number) {
                 number = fristItem;   
             }
         };

         return  number
  }

     get personalTopThree() {
         return [...this.scores]
      .sort((a, b) => b - a)
      .slice(0, 3);
        }
    }

    const ScoreList = [40, 100, 70, 31, 22, 11, 44, 32, 66, 77, 88, 99, 232, 43];
    const show = new HighScores(ScoreList);

   return (
        <div onClick={() => console.log(show)} style={{ width: "100%", height: "100vh", backgroundColor: "#0c0c0c", color: "#fff", textAlign: "center", fontSize: "2rem", borderRadius: "1rem" }}>
            test me
        </div>
            
    )
}
export default High_Scores