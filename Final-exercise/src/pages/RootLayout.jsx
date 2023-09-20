import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div id="rootP">
            <header>
                <h2>REACT STOCK</h2>
                <nav>
                    <Link to='/'><h3>Inicio</h3></Link>
                    <Link to='/stockitens'><h3>Itens</h3></Link>
                    
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
            <footer>
                <h2>Feito com React e React Router</h2>
            </footer>
        
        
        </div>
    )
}