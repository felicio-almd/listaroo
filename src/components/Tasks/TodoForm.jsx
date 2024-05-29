import "./TodoForm.css";
import { Icon } from "@iconify/react";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");


  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      text: input,
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
      {props.edit ? (
        <>
          <textarea
            maxLength={50}
            type="text"
            className="task__title"
            placeholder="Tarefa..."
            value={input}
            onChange={handleChange}
            required
            onKeyDown={(e) => {
              if (isEnterPressed(e)) handleSubmit(e);
            }}
          />
          <button type="submit" className="task__button__add">
            <Icon icon="material-symbols:add-box" width="32" height="32" />
          </button>
        </>
      ) : (
        <>
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
          <button type="submit" className="task__button__add">
            <Icon icon="material-symbols:add" width="28" />
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;