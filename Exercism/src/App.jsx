import { useNavigate } from "react-router-dom"
import "./App.css"

const exercises = {
  easy: [
    "Etl", "Hamming", "Raindrops", "Bank_Account", "Difference_of_Squares",
    "Perfect_Numbers", "Anagram", "Acronym", "High_Scores", "isIsogram",
    "Matching_Brackets", "Phone_Number", "Series", "Transpose",
  ],
  mid: [
    "Camicia", "Meetup", "Nucleotide_count", "Scrabble_Score", "Word_Count",
    "Luhn", "Prime_Factors", "Grains", "Palindrome_Products",
    "Largest Series Product", "Rectangles", "Spiral_Matrix", "Relative_Distance",
    "OCR_Numbers", "Saddle_Points", "Food_Chain", "House", "ISBN_Verifier",
    "Pig_Latin", "Proverb", "Twelve_Days", "Yacht", "Resistor_Color_Trio",
    "Dominoes", "Say", "Dimonds", "Rational_Numbers",
  ],
  hard: ["Forth"],
}

const levelTitle = { easy: "Easy 🟢", mid: "Medium 🟡", hard: "Hard 🔴" }

const App = () => {
  const navigate = useNavigate()

  return (

    <div className="app theme-neon">
      {Object.entries(exercises).map(([level, list]) => (
        <section key={level} className={level}>
          <h2 className="title">{levelTitle[level]}</h2>
          <div className="grid">
            {list.map((name) => (
              <button
                key={name}
                className={`card ${level}`}
                onClick={() => navigate(name)}
              >
                {name.replaceAll("_", " ")}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default App