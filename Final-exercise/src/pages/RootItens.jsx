
import { Link, Outlet } from "react-router-dom";

export default function RootItens() {
    return (
        <div id='alliCont'>  
            <h1 id="title">Stock Itens</h1>
            <div id="header">
                <Link to='../stockitens'><h2>Todos os itens</h2></Link>
                <Link to='newitem'><h2>Novo Item</h2></Link>
            </div>
            
            <div>
                <hr />
                <Outlet/>
            </div>        
        </div>

    )
}