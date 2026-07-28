import Camicia from "../Exercises/exercise-camicia-md-lvl/camicia"
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx"
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
                element:<Camicia></Camicia>
            }
        ]
    }
])
export default routs;