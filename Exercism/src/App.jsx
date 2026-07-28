
import { useNavigate } from "react-router-dom"
const App = () => {
  const navigate=useNavigate()
  return <div>
    <button onClick={()=>navigate("Camicia")}>Camicia exercise mid</button>
  </div>
}

export default App
