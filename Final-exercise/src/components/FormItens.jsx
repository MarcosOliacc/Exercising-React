import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import useItens from "../hooks/useItens"

export default function FormItens() {
    const attItem = useLoaderData()
    const defaultItem = {
        name: '',
        quantity: '',
        price:'',
        category: '',
        description: ''
    }
    const [item, setItem] = useState(attItem?attItem:defaultItem)
    
    const { addItens, attItens } = useItens()
    function handleSubmit(ev) {
        ev.preventDefault()
        if(!item.name||!item.quant||!item.price||!item.categ||!item.descri) {
            alert('Preencha todos os dados.')
        }else if(attItem) {
            attItens(item)
            alert('Item atualizado!')
        } else { 
            addItens(item)
            alert('Item adicionado com sucesso.')
            setItem(defaultItem)
        }
    }
    function handleChange(ev) {
        setItem((state)=>{
            return {
                ...state,
                [ev.target.name]: ev.target.value
            }
        })
    }


    return (
        <form className="newItem" onSubmit={handleSubmit} action="/stockitens">
        <div className="formContent">
            <div>
                <label htmlFor="name">Nome</label>
                <input 
                    value={item.name} 
                    onChange={handleChange}
                    type="text" name="name" id="name"
                />
            </div>
            <div>
                <label htmlFor="quant">Quantidade</label>
                <input 
                    value={item.quantity}
                    onChange={handleChange}
                    type="number" name="quant" id="quant"
                />
            </div>
            <div>
                <label htmlFor="price">Preço</label>
                <input 
                    value={item.price}
                    onChange={handleChange}
                        
                    type="number" name="price" id="price"
                />
            </div>
            <div>
                <label htmlFor="categ">Categoria</label>
                <select name="categ" id="categ" 
                    value={item.category} 
                    onChange={handleChange}
                        
                >
                    <option value=''>selecione uma categoria...</option>
                    <option value="Eletrodoméstico">Eletrodoméstico</option>
                    <option value="Estofado">Estofado</option>
                    <option value="Decoração">Decoração</option>
                    <option value="Brinquedo">Brinquedo</option>
                </select>
            </div>
        </div>
        <div className="formContent2">
            <label htmlFor="descri">Descrição</label>
            <textarea 
                value={item.description}
                onChange={handleChange}
                    
                name="descri" id="descri" cols="30" rows="8"></textarea>
        </div>
        <button className="attBtn" type="submit">Salvar</button>
        
    </form>
    )
}