import { useState } from "react"
import PropTypes from 'prop-types'
import TextForm from "./TextForm"

Form.propTypes = {
    addGame: PropTypes.func
}

export default function Form(prop) {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')


    const handleSubmit = (ev) => {
        ev.preventDefault()
        prop.addGame({title, cover})
        setTitle('')
        setCover('')
      }
    return (
        <form onSubmit={handleSubmit}>
        <TextForm value={title} setValue={setTitle} label='Titulo:'/>
        <TextForm value = {cover} setValue={setCover} label='Capa:' />

        <button type="submit">Adicionar a Biblioteca</button>
      </form>
    )
}