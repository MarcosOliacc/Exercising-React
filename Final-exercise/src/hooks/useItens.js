import { useState } from "react";
import CreateItem from "../entities/CreateItem";
import { useNavigate } from "react-router-dom";
export default function useItens() {
    const [itens, setItens] = useState(()=>{
        const storage = localStorage.getItem('sdf-itens-lib')
        if(!storage) return []
        return JSON.parse(storage)
    })
    const addItens = ({name,quant,price,categ,descri})=> {
        const idNum = Math.floor((Math.random() * (99999 - 10000) + 10000))
        const idStr = Math.random().toString(36).substr(-5).toUpperCase()
        const id = `${idStr}-${idNum}`
        const today = new Date()
        const newItem = new CreateItem(id,name,quant,price,categ,descri,today.toLocaleDateString(),null)
        setItens((st)=>{
            const newState = [newItem,...st]
            localStorage.setItem('sdf-itens-lib',JSON.stringify(newState))
            return newState
        })
        
    }
    const attItens = ({id,name,quant,price,categ,descri})=> {
        setItens((st)=>{
            const creaDate = st.filter(it=>it.id == id)[0]
            const newState = st.filter(it=>it.id !== id) 
            const today = new Date()        
            const newItem = new CreateItem(id,name,quant,price,categ,descri,creaDate.createdAt,today.toLocaleDateString())            
            
            newState.push(newItem)
            localStorage.setItem('sdf-itens-lib',JSON.stringify(newState))

            return newState
        })
    }
    const navigator = useNavigate()
    const removeItens = (id)=> {
        setItens((st)=>{
            const newState = st.filter(it=>it.id !== id)   
            localStorage.setItem('sdf-itens-lib',JSON.stringify(newState))
            navigator('/stockitens')
            return newState
        })

    }


    return {itens, addItens, attItens, removeItens}
}