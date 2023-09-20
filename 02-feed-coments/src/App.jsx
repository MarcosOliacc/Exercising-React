
import Coment from "./components/Coment"
import Form from "./components/Form"
import useComent from "./hooks/useComent"

export default function App() {
  const { coments, addComent, but, setBut } = useComent()

  return (
    <div id="app">
      <h1>Seção de comentários</h1>
      {but ? (<button id="newComent" onClick={()=>setBut(false)}>Comentar</button>):(<Form addComent={addComent}/>)}
      
      
      <hr />
      <div>
        {coments.length ? (
          coments.map((comit)=> (
            <Coment 
              key={comit.id}
              date={comit.fullDate}
              email={comit.email}
              coment={comit.coment}
            />
          ))
        ): <h2>Seja o Primeiro a comentar!</h2>}
      </div>

      


    </div>
  )
}