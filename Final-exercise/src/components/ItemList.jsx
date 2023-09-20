import { Link} from "react-router-dom";
import useItens from "../hooks/useItens";
import ShowBtn from "./ShowBtn";

export default function ItemList() {
    const itens = useItens()
    return (
      <>
        {itens&&itens.itens.map((item)=>(
        <div className="itenShown" key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.category}</p>

            <div>
                <ShowBtn ids={item.id}/>
                <Link to={`/stockitens/attproduct/${item.id}`}>
                <button className="attBtn">Atualizar</button>
                </Link>
                
                <button 
                    className="excBtn" 
                    onClick={()=>itens.removeItens(item.id)}
                >Excluir</button>
            </div>
        </div>
        ))}
      </>

    )
}