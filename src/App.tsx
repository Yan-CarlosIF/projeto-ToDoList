import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import EmptyList from "./components/List/EmptyList";
import ListHeader from "./components/ListHeader";
import Task, { ITask } from "./components/List/Task/Task";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const handleTaskCompleted = (isChecked: boolean) => {
    setCompletedTaskCount((prevState) => {
      if (!isChecked) {
        return prevState + 1;
      } else {
        return prevState - 1;
      }
    });
  };

  const handleAddTask = (taskContent: string) => {
    if (taskContent.length === 0) return;

    setTasks((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        content: taskContent,
        isChecked: false,
        removeTask: handleRemoveTask,
        onTaskCompleted: handleTaskCompleted,
      },
    ]);
  };

  const handleRemoveTask = (content: string, checked: boolean) => {
    if (!confirm("Deseja mesmo apagar essa tarefa?")) return;

    const prevLength = tasks.length;
    const newList = tasks.filter((task) => task.content !== content);
    setTasks([...newList]);

    if (checked) {
      setCompletedTaskCount(
        (prevState) => prevState - (prevLength - newList.length)
      );
    }
  };

  return (
    <>
      <Header />

      <div className="app">
        <Input handleAddTask={handleAddTask} />
        <main className="task-list">
          <ListHeader
            taskCount={tasks.length}
            completedTaskCount={completedTaskCount}
          />
          {tasks.length > 0 ? (
            <div className="tasks">
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  content={task.content}
                  isChecked={task.isChecked}
                  removeTask={handleRemoveTask}
                  onTaskCompleted={handleTaskCompleted}
                />
              ))}
            </div>
          ) : (
            <EmptyList />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
