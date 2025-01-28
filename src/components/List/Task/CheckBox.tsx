import "./CheckBox.css";
import { Check } from "phosphor-react";

interface CheckBoxProps {
  checked: boolean;
  handleBoxCheck: () => void;
  onTaskCompleted: (isChecked: boolean) => void;
}

function CheckBox({ checked, handleBoxCheck, onTaskCompleted }: CheckBoxProps) {
  return (
    <label
      htmlFor="checkbox"
      onClick={() => {
        handleBoxCheck();
        onTaskCompleted(checked);
      }}
    >
      <input type="checkbox" checked={checked} onChange={handleBoxCheck} />
      <span className="check">
        {checked && <Check size={14} color="#fff" weight="bold" />}
      </span>
    </label>
  );
}

export default CheckBox;
