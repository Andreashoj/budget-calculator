import React, { useContext, useState } from "react";
import { ListContext } from "../contexts/ListContext";

const ListItemEdit = ({ item }) => {
  const { SaveItem, RemoveItem } = useContext(ListContext);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    SaveItem(itemName, itemValue, id);
    setItemName("");
    setItemValue("");
  };

  const [itemName, setItemName] = useState();
  const [itemValue, setItemValue] = useState();

  return (
    <ul className="list-ul-edit">
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
    </ul>
  );
};

export default ListItemEdit;
