import { Link, useLoaderData } from "react-router-dom"
import useItens from "../hooks/useItens"
import { useState } from "react"

export default function ShownItem() {
    const item = useLoaderData()
    const [interf, setIterf] = useState(true)

    const itens = useItens()
    return (
        <>
            {interf?(
                <div>
                    <div> 
                        <h1>{item.name}</h1>
                        <Link to={`/stockitens/attproduct/${item.id}`}>
                            <button className="attBtn">Atualizar</button>
                        </Link>
                        <button 
                            className="excBtn" 
                            onClick={()=>{itens.removeItens(item.id);setIterf(null)}} 
                        >Excluir</button>
                    </div>
                    <div>
                        <p className="infosItens">Categoria: {item.category}</p>
                        <p className="infosItens">Quantidade em estoque: {item.quantity}</p>
                        <p className="infosItens">Preço: {item.price}</p>
                    </div>
                    <p>{item.description}</p>
                    <div>
                        <p>Data de criação: {item.createdAt}</p>
                        <p>Data de atualização: {item.lastAtt?item.lastAtt:'Ainda não atualizado.'}</p>
                    </div>
                </div>        
            ):(<button>voltar</button>)}
        </>
    )

}