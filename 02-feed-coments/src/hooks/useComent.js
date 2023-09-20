import { useState } from "react";
let ids = 0
export default function useComent() {
    const [coments, setComents] = useState(()=> {   
        const storage = localStorage.getItem('obc-coments-lib')
        if(!storage) return []
        return JSON.parse(storage)
    })
    const [but, setBut] = useState(true)



    const addComent = ({email,coment}) => {
        ids++

        const date = new Date()
        const hour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        const fullDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${hour}`

        const comit = {ids,fullDate, email,coment}
        setComents((state)=> {
            const newState = [comit,...state]
            localStorage.setItem('obc-coments-lib', JSON.stringify(newState))
            return newState
        })  
        setBut(true)
        
    }
    return {coments, addComent, but, setBut}
}