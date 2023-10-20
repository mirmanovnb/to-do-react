/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "../components/Button";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeKeyboard = (event) => {
    if (event.keyCode === 13) {
      handleClick();
    }
  };
  const handleClick = (event) => {
    if (value.trim().length) {
      const todoItem = {
        id: Date.now(),
        text: value.trim(),
        complited: false,
      };
      console.log(todoItem);
    } else {
      console.log("empty todo item");
    }
    setValue("");
  };
  return (
    <div>
      <input
        value={value}
        type="text"
        placeholder="Введите текст и нажмите Добавить"
        onChange={handleChange}
        onKeyDown={handleChangeKeyboard}
      />
      <Button text="Добавить Todo" className="add_todo" click={handleClick} />
    </div>
  );
};

export default AddTodo;
