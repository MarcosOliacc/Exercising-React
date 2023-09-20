import { useState } from "react"
let ids = 0
export default function useGame() {
    const [games, setGames] = useState(()=> {
        const storage = localStorage.getItem('obc-game-lib')
        if(!storage) return []
        return JSON.parse(storage)
    })

    const addGame = ({title,cover}) => {
    ids++
    const id = ids
    const game = {id,title,cover}
    
    setGames(state => {
        const newState = [...state, game]
        localStorage.setItem('obc-game-lib', JSON.stringify(newState))
        return newState
    })
        
    }
    const removeGame = (id) => {
    setGames(state => {
        const newState = state.filter(game=>game.id !== id)
        localStorage.setItem('obc-game-lib', JSON.stringify(newState))
        return newState
    })
    }
    return {games, addGame, removeGame}
}