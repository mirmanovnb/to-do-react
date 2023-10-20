import React from "react";
import "../App.css";

import Button from "../components/Button";

const FilterPanel = () => {
  return (
    <div className="filter_panel">
      <Button text="Все" className="filter_btn all" />
      <Button text="Выполненные" className="filter_btn done" />
      <Button text="Невыполненные" className="filter_btn notDone" />
    </div>
  );
};

export default FilterPanel;
