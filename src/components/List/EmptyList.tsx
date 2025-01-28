import "./EmptyList.css";
import Clipboard from "../../../public/Clipboard.svg";

function EmptyList() {
  return (
    <div className="empty">
      <img src={Clipboard} alt="clipboard" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

export default EmptyList;
