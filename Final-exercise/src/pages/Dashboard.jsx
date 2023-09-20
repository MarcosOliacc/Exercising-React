import StatusDash from "../components/StatusDash";
import AcaItens from "../components/deshItens/AcaItens";
import RecItens from "../components/deshItens/RecItens";

export default function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <StatusDash/>
      <section id="showContent">
        <div className="showItens">
          <div className="head1">
             <h3>Itens Recentes</h3>
             <h3>Ações</h3>
          </div>
          <RecItens/>
        </div>
        <div className="showItens">
          <div className="head2">
             <h3>Itens acabando</h3>
             <h3>Qtd.</h3>
             <h3>Ações</h3>
          </div>
          <AcaItens/>

        </div>
      </section>

    </main>
  )
}