import useInfos from "../../hooks/useInfos"
import ShowBtn from "../ShowBtn"

export default function RecItens() {
    const itens = useInfos()


    return (
        <>
        {itens&&itens.recItens.map(item=>(
            <div id="recItens" key={item.id}>
                <p>{item.name}</p>
                <ShowBtn ids={item.id}/>
            </div>            
        ))}

        </>
    )
}