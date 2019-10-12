import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

const ListItem = ({ item }) => {
  const { EditItem, RemoveItem } = useContext(ListContext);

  return (
    <li key={item.id} className="list-li">
      <div>{item.name}</div>
      <div>{item.value}$</div>
      <div>
        <button className="edit-button" onClick={() => EditItem(item.id)}>
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
  );
};

export default ListItem;
