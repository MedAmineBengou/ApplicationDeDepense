import React from "react";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="container">
          <Balance />

          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </Provider>
  );
}

export default App;
