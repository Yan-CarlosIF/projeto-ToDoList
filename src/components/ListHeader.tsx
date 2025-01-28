import "./ListHeader.css";

interface ListHeaderProps {
  taskCount: number;
  completedTaskCount: number;
}

function ListHeader({ taskCount, completedTaskCount }: ListHeaderProps) {
  return (
    <header className="list-header">
      <span className="tasks-counter">
        Tarefas criadas <span className="counter">{taskCount}</span>
      </span>
      <span className="completed-counter">
        Concluídas{" "}
        <span className="counter">
          {!taskCount ? 0 : `${completedTaskCount} de ${taskCount}`}
        </span>
      </span>
    </header>
  );
}

export default ListHeader;
