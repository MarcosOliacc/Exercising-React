import { useState } from "react"

export default function useInfos() {
    const [itens] = useState(()=>{
        const storage = localStorage.getItem('sdf-itens-lib')
        if(!storage) return []
        return JSON.parse(storage)
    })
    const varItens = itens.length
    const totItens = itens.reduce((acc, init)=>{
        return acc + Number(init.quantity) 
      },0)
    const recItens = itens.filter(o=>{
      const date = new Date()
      return o.createdAt == date.toLocaleDateString()
    })
    const lastsItens = itens.filter(o=>o.quantity < 10)
    
    return { varItens, totItens, recItens, lastsItens }
}