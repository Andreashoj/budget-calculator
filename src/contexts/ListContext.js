import React, { useState, createContext } from "react";
import uuid from "uuid/v1";

export const ListContext = createContext();

const ListContextProvider = props => {
  const [budgetItems, setBudgetItems] = useState([
    { name: "Car", value: 100, editMode: false, id: 1 },
    { name: "Banana", value: 5, editMode: false, id: 2 },
    { name: "Montain Bike", value: 23, editMode: false, id: 3 }
  ]);

  const AddItem = (name, value) => {
    setBudgetItems([...budgetItems, { name, value, id: uuid() }]);
  };

  const RemoveItem = id => {
    setBudgetItems(budgetItems.filter(item => item.id !== id));
  };

  const EditItem = id => {
    setBudgetItems(
      budgetItems.map(item => {
        if (item.id === id) {
          return { ...item, editMode: true };
        } else {
          return item;
        }
      })
    );
  };

  const SaveItem = (name, value, id) => {
    setBudgetItems(
      budgetItems.map(item => {
        if (item.id === id) {
          return { name, value, editMode: false, id: item.id };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <ListContext.Provider
      value={{
        budgetItems,
        setBudgetItems,
        AddItem,
        RemoveItem,
        EditItem,
        SaveItem
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
