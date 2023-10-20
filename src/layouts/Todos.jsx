import React from "react";
import Button from "../components/Button";
const Todos = () => {
  return (
    <div className="todos_wrapper">
      <ul className="todos">
        <li>
          <input type="checkbox" />
          <p>Сходить в магазин</p>
          <Button text="Удалить" />
        </li>
      </ul>
    </div>
  );
};

export default Todos;
