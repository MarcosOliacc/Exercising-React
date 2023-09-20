import useInfos from "../hooks/useInfos"

export default function StatusDash() {
  const { varItens, totItens, recItens, lastsItens } = useInfos()
  return (
      <section id="statusContent">
      <div id="status">
        <p>Diversidade de Itens</p>
        <h1>{varItens}</h1>
      </div>
      <div id="status">
        <p>Inventário total</p>
        <h1>{totItens}</h1>
      </div>
      <div id="status">
        <p>Itens recentes</p>
        <h1>{recItens.length}</h1>
      </div>
      <div id="status">
        <p>Itens acabando</p>
        <h1>{lastsItens.length}</h1>
      </div>
  </section>
  )
}