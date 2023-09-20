
import Game from "./components/Game"
import Form from "./components/Form"
import useGame from "./hooks/useGame"


export default function App() {
  const {games, addGame, removeGame} = useGame()
  return (
    <>
      <h1>Biblioteca de jogos</h1>
      <Form addGame={addGame}/>
      <div className="games">
        {games.length > 0 ? (games.map((game)=> (
          <Game 
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={()=> removeGame(game.id)}
          />
          ))): <h2>Vazio</h2>
        }
      </div>
    </>
  )
}
