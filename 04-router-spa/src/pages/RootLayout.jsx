import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RoootLayout() {
    return (
        <>
            <Header/>
            <main>
                <p>Conteúdo principal:</p>
                <hr />
                <Outlet />
                <hr />
            </main>
            <footer>
                <p>Feito com React Router DOM</p>
            </footer>
        </>
    )
}