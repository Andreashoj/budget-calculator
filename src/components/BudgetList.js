import React, { useContext, useState, useEffect } from "react";
import { ListContext } from "../contexts/ListContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const BudgetList = () => {
  const { budgetItems, RemoveItem, EditItem, SaveItem } = useContext(
    ListContext
  );

  const [itemName, setItemName] = useState();
  const [itemValue, setItemValue] = useState();

  const handleSubmit = (e, id) => {
    e.preventDefault();
    SaveItem(itemName, itemValue, id);
    setItemName("");
    setItemValue("");
  };

  return (
    <ul className="list-ul">
      <TransitionGroup>
        {budgetItems.map(item => {
          if (!item.editMode) {
            return (
              <CSSTransition key={item.id} timeout={500} classNames="item">
                <li key={item.id} className="list-li">
                  <div>{item.name}</div>
                  <div>{item.value}$</div>
                  <div>
                    <button
                      className="edit-button"
                      onClick={() => EditItem(item.id)}
                    >
                      edit
                    </button>
                    <button
                      className="remove-button "
                      onClick={() => {
                        RemoveItem(item.id);
                      }}
                    >
                      x
                    </button>
                  </div>
                </li>
              </CSSTransition>
            );
          } else {
            return (
              <ul className="list-ul-edit">
                <CSSTransition key={item.id} timeout={500} classNames="item">
                  <li className="list-li-edit" key={item.id}>
                    <form onSubmit={e => handleSubmit(e, item.id)}>
                      <input
                        type="text"
                        name="editItemName"
                        onChange={e => setItemName(e.target.value)}
                        value={itemName}
                        placeholder="New item"
                        required
                      />
                      <input
                        type="number"
                        name="editItemValue"
                        onChange={e => setItemValue(parseInt(e.target.value))}
                        value={itemValue}
                        placeholder="New value"
                        required
                      />
                      <div>
                        <button type="submit" className="edit-button">
                          SAVE
                        </button>
                        <button
                          className="remove-button"
                          onClick={() => RemoveItem(item.id)}
                        >
                          x
                        </button>
                      </div>
                    </form>
                  </li>
                </CSSTransition>
              </ul>
            );
          }
        })}
      </TransitionGroup>
    </ul>
  );
};

export default BudgetList;
