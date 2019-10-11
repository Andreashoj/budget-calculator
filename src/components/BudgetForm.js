import React, { useContext, useState } from "react";
import { ListContext } from "../contexts/ListContext";

const BudgetForm = () => {
  const { AddItem } = useContext(ListContext);
  const [itemName, setItemName] = useState();
  const [itemValue, setItemValue] = useState();

  const handleFormSubmit = e => {
    e.preventDefault();
    AddItem(itemName, itemValue);
    setItemName("");
    setItemValue("");
  };

  return (
    <form className="budget-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="item-name"
        placeholder="Add item"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
        required
      />
      <input
        type="number"
        name="item-price"
        placeholder="Add price"
        value={itemValue}
        onChange={e => setItemValue(parseInt(e.target.value))}
        required
      />
      <input type="submit" value="Save item" />
    </form>
  );
};

export default BudgetForm;
