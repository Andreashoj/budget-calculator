import React, { useContext, useState } from "react";
import { ListContext } from "../contexts/ListContext";
import ListItem from "./ListItem";
import ListItemEdit from "./ListItemEdit";
import { animated, useTransition } from "react-spring";

const BudgetList = () => {
  const { budgetItems } = useContext(ListContext);

  const transitions = useTransition(
    budgetItems,
    budgetItems.map(item => item.id),
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 }
    }
  );

  return (
    <ul className="list-ul">
      {transitions.map(({ item, key, props }) => {
        if (!item.editMode) {
          return (
            <animated.div key={key} style={props}>
              <ListItem item={item} />
            </animated.div>
          );
        } else {
          return (
            <animated.div key={key} style={props}>
              <ListItemEdit item={item} />
            </animated.div>
          );
        }
      })}
    </ul>
  );
};

export default BudgetList;
