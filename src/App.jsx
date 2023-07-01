import { useDispatch, useSelector } from "react-redux"
import Parents from "./components/Parents"

const App = () => {
  const com = useSelector(state => state.Com )
  const dispatch = useDispatch()
  return (
    <div>
      <h1>redux</h1>
      <button onClick={()=>dispatch({
        type: "Com/sendQuestion",
        payload: 'salut petit'
      })}>nsg a lenfant</button>
      <p>l enfant repond:{com.reponse}</p>
      <Parents/>
      
    </div>
  )
}

export default App

