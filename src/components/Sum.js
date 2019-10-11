import React, { useContext, useState, useEffect } from "react";
import { ListContext } from "../contexts/ListContext";

const Sum = () => {
  const { budgetItems } = useContext(ListContext);
  const [sum, setSum] = useState();

  useEffect(() => {
    if (budgetItems.length > 0) {
      setSum(budgetItems.map(item => item.value).reduce((a, b) => a + b));
    } else {
      setSum(0);
    }
  }, [budgetItems]);

  return (
    <p className="sum">
      Total expenses :&nbsp;<span className="sum-num">{sum}$</span>
    </p>
  );
};

export default Sum;
