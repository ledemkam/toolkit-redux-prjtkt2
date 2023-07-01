import { useDispatch, useSelector } from "react-redux"

const Enfants = () => {
 const com = useSelector(state => state.Com)
 const dispatch = useDispatch();

  return (
    <div className="enfants" >
      <h1>enfants</h1>
      <div>
        j ai suivi : {com.question}
      </div>
      <button onClick={()=>dispatch({
          type: "Com/sendReponse",
          payload:"oui mon vieux"
      })}>Repondre</button>
    </div>
  )
}

export default Enfants
