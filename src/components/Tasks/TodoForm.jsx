import "./TodoForm.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [color, setColor] = useState('--card-blue');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const rootStyles = getComputedStyle(document.documentElement);
    const selectedColor = rootStyles.getPropertyValue(color).trim();

    props.onSubmit({
      id: uuidv4(),
      text: input,
      color: selectedColor,
    });

    setInput("");
  };

  function isEnterPressed(e) {
    let keycode = null;
    if (e != null) {
      if (e != undefined) {
        if (e.keyCode) keycode = e.keyCode;
        else if (e.charCode) keycode = e.charCode;
      } else {
        keycode = e.keyCode;
      }
    }
    return keycode == 13;
  }

  return (
    <form onSubmit={handleSubmit} className="task__form">
      <textarea
        maxLength={50}
        type="text"
        className="task__title"
        placeholder="Digite sua tarefa..."
        value={input}
        onChange={handleChange}
        required
        onKeyDown={(e) => {
          if (isEnterPressed(e)) handleSubmit(e);           
        }}
      />
      <div className="task__add__container">
        <button type="submit" className="task__button__add">
          <Icon icon="material-symbols:add" width="28" />
        </button>

        <select value='fonte' onChange={handleColorChange} className={`color__selector ${color}`}>
          {/* <Icon icon="solar:pallete-2-bold" width="28" /> */}
          <option></option>
          <option disabled>ESCOLHA O FUNDO DO CARD</option>
          <option value="--card-blue">Azul</option>
          <option value="--card-green">Verde</option>
          <option value="--card-yellow">Amarelo</option>
          <option value="--card-pink">Rosa</option>
        </select>
      
      </div>
    </form>
  );
}

export default TodoForm;
