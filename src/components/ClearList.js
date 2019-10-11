import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const ClearList = () => {
  const { setBudgetItems } = useContext(ListContext);

  return (
    <button className="clear-list-button" onClick={() => setBudgetItems([])}>
      Clear all expenses
    </button>
  );
};

export default ClearList;
