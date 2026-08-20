import Camicia from "../Exercises/exercise-camicia-md-lvl/camicia"
import Meetup from "../Exercises/exercise-meetup-mid-lvl/meetup.jsx";
import Etl from "../Exercises/exercise-ETL-ez-lvl/etl.jsx";
import Hamming from "../Exercises/exercise-hamming-ez-lvl/hamming.jsx";
import Raindrops from "../Exercises/exercise-Raindrops-ez-lvl/Raindrops.jsx";
import Nucleotide_count from "../Exercises/nucleotide-count-mid-lvl/nucleotide-count.jsx";
import Scrabble_Score from "../Exercises/Scrabble-Score-mid-lvl/Scrabble-Score.jsx";
import Word_Count from "../Exercises/exercise-word-Count-mid-lvl/Word-Count.jsx";
import Bank_Account from "../Exercises/exercise-Bank-Account-ez-lvl/Bank-Account.jsx";
import Difference_of_Squares from "../Exercises/exercise-Difference-of-Squares-ez-lvl/Difference-of-Squares.jsx";
import Perfect_Numbers from "../Exercises/execise-Perfect-Numbers-ez-lvl/Perfect-Numbers.jsx";
import Luhn from "../Exercises/exsercise-Luhn-mid-lvl/Luhn.jsx";
import Prime_Factors from "../Exercises/exercisr-Prime-Factors-mid-lvl/Prime-Factors.jsx";
import Grains from "../Exercises/exercise-Grains-mid-lvl/Grains.jsx";
import App from "../App.jsx"
import { createBrowserRouter } from "react-router-dom";
let routs = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <App></App>
            },
            {
                path: "Camicia",
                element: <Camicia></Camicia>
            },
            {
                path: "Meetup",
                element: <Meetup></Meetup>
            },
            {
                path: "ETL",
                element: <Etl></Etl>
            },
            {
                path: "Hamming",
                element: <Hamming></Hamming>
            },
            {
                path: "Raindrops",
                element: <Raindrops></Raindrops>
            },
            {
                path: "Nucleotide_count",
                element:<Nucleotide_count></Nucleotide_count>
            },
                {
                path: "Scrabble_Score",
                element:<Scrabble_Score></Scrabble_Score>
            },
                 {
                path: "Word_Count",
                element:<Word_Count></Word_Count>
            },
            {
                path: "Bank_Account",
                element:<Bank_Account></Bank_Account>
            },
            {
                path: "Difference_of_Squares",
                element:<Difference_of_Squares></Difference_of_Squares>
            },
              {
                path: "Perfect_Numbers",
                element:<Perfect_Numbers></Perfect_Numbers>
            },
            {
                path: "Luhn",
                element:<Luhn></Luhn>
            },
             {
                path: "Prime_Factors",
                element:<Prime_Factors></Prime_Factors>
            },
                  {
                path: "Grains",
                element:<Grains></Grains>
            },
        ]
    }
])
export default routs;