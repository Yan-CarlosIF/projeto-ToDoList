import "./Input.css";
import { useState } from "react";
import { PlusCircle } from "phosphor-react";

interface inputProps {
  handleAddTask: (taskContent: string) => void;
}

function Input({ handleAddTask }: inputProps) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);

    if (e.target.value.length > 0) {
      e.target.style.outline = "var(--purple-dark) 1px solid";
    } else {
      e.target.style.outline = "none";
    }
  };

  return (
    <div className="nav-bar">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputText}
        className="nav-input"
        onChange={handleInputChange}
      />
      <button
        className="create-button"
        onClick={() => {
          handleAddTask(inputText);
          setInputText("");
        }}
      >
        Criar
        <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </button>
    </div>
  );
}

export default Input;
