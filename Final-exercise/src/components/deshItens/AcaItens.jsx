import useInfos from "../../hooks/useInfos"
import ShowBtn from "../ShowBtn"

export default function AcaItens() {
    const itens = useInfos()
    return (
        <>
        {itens&&itens.lastsItens.map(item=>(
            <div id="acaItens" key={item.id}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <ShowBtn ids={item.id}/>
            </div>            
        ))}

        </>

    )
}