import "./Task.css";
import { Trash } from "phosphor-react";
import CheckBox from "./CheckBox";
import { useState } from "react";

export interface ITask {
  id?: number;
  content: string;
  isChecked: boolean;
  removeTask: (content: string, checked: boolean) => void;
  onTaskCompleted: (isChecked: boolean) => void;
}

const styleIfChecked = {
  textDecoration: "line-through",
  color: "var(--gray-300)",
  transition: "0.2s",
};

function Task({
  content,
  isChecked = false,
  removeTask,
  onTaskCompleted,
}: ITask) {
  const [boxCheck, setBoxCheck] = useState(isChecked);

  const handleBoxCheck = () => {
    setBoxCheck(!boxCheck);
  };

  return (
    <li className="task">
      <CheckBox
        handleBoxCheck={handleBoxCheck}
        checked={boxCheck}
        onTaskCompleted={onTaskCompleted}
      />
      <p style={boxCheck ? styleIfChecked : {}}>{content}</p>
      <button className="delete" onClick={() => removeTask(content, boxCheck)}>
        <Trash size={16} weight="bold" />
      </button>
    </li>
  );
}

export default Task;
