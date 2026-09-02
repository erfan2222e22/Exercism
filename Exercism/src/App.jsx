
import { useNavigate } from "react-router-dom"
const App = () => {
  const navigate = useNavigate()
  return <div>
    <button onClick={() => navigate("Camicia")}>Camicia exercise mid</button>
    <button onClick={() => navigate("Meetup")}>Meetup exercise mid</button>
    <button onClick={() => navigate("Etl")}>exercise ETL ez lvl</button>
    <button onClick={() => navigate("Hamming")}>exercise Hamming ez lvl</button>
    <button onClick={() => navigate("Raindrops")}>exercise Raindrops ez lvl</button>
    <br />
    <button onClick={() => navigate("Nucleotide_count")}>exercise Nucleotide_count mid lvl</button>
    <button onClick={() => navigate("Scrabble_Score")}>exercise Scrabble_Score mid lvl</button>
    <button onClick={() => navigate("Word_Count")}>exercise Word_Count mid lvl</button>
    <button onClick={() => navigate("Bank_Account")}>exercise Bank_Account ez lvl</button>
    <button onClick={() => navigate("Difference_of_Squares")}>exercise Difference_of_Squares ez lvl</button>
    <button onClick={() => navigate("Perfect_Numbers")}>exercise Perfect_Numbers ez lvl</button>
    <button onClick={() => navigate("Luhn")}>exercise Luhn mid lvl</button>
    <button onClick={() => navigate("Prime_Factors")}>exercise Prime_Factors mid lvl</button>
    <button onClick={() => navigate("Grains")}>exercise Grains mid lvl</button>
    <button onClick={() => navigate("Palindrome_Products")}>exercise Palindrome_Products mid lvl</button>
    <button onClick={() => navigate("Anagram")}>exercise Anagram ez lvl</button>
    <button onClick={() => navigate("Acronym")}>exercise Acronym ez lvl</button>
    <button onClick={() => navigate("High_Scores")}>exercise High_Scores ez lvl</button>
    <button onClick={() => navigate("isIsogram")}>exercise Isogram ez lvl</button>
    <button onClick={() => navigate("Matching_Brackets")}>exercise Matching_Brackets ez lvl</button>
    <button onClick={() => navigate("Phone_Number")}>exercise Phone_Number ez lvl</button>
    <button onClick={() => navigate("Series")}>exercise Series ez lvl</button>
    <button onClick={() => navigate("Series")}>exercise Series ez lvl</button>
    <button onClick={() => navigate("Largest Series Product")}>exercise Largest Series Product mid lvl</button>

  </div>
}

export default App
