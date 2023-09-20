//import { useLoaderData } from "react-router-dom";

import ItemList from "../components/ItemList";

export default function AllItens() {

  return (
    <>
      <div id="headItens">
        <h3>ID</h3>
        <h3>Nome</h3>
        <h3>Em Estoque</h3>
        <h3>Categoria</h3>
        <h3>Ação</h3>
      </div>
      <ItemList />
    </>
  )
}