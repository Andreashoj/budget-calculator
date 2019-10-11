import React from "react";
import "./App.css";
import BudgetList from "./components/BudgetList";
import BudgetForm from "./components/BudgetForm";
import ListContextProvider from "./contexts/ListContext";
import Sum from "./components/Sum";
import ClearList from "./components/ClearList";

function App() {
  return (
    <div className="App">
      <h1>Budget Calculator</h1>
      <ListContextProvider>
        <BudgetForm />
        <BudgetList />
        <Sum />
        <ClearList />
      </ListContextProvider>
    </div>
  );
}

export default App;
