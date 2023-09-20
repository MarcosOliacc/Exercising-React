import { useState } from "react"

//import PropTypes from 'prop-types'
export default function Form(prop) {
    const [ email, setEmail ] = useState('')
    const [coment, setComent ] = useState('')
    function handleSubmit(ev) {
        ev.preventDefault()
        prop.addComent({email, coment})
        setEmail('')
        setComent('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input 
                type="text" 
                id="email" 
                value={email}
                onChange={(ev)=> setEmail(ev.target.value)}
            />
            <label htmlFor="coment">Comentário:</label>
            <textarea 
                type="text" 
                id="coment" 
                rows={6} 
                value={coment} 
                onChange={(ev)=> setComent(ev.target.value)}
            />
            <button>Enviar Comentário</button>
      </form>
    )
}