import logo from "./logo.svg";
import "./App.css";
import React from 'react';

// import ExpenseItem from "./components/ExpenseItem.js";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Biscults", amount: 234.3, date: new Date(2021, 2, 28) },
    { title: "Cashew", amount: 253.3, date: new Date(2021, 8, 3) },
    { title: "Kismish", amount: 210.3, date: new Date(2021, 8, 2) },
    { title: "Pistaa", amount: 250.3, date: new Date(2021, 8, 2) }
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's Make To DO List"),
  //   React.createElement(Expenses, {cart :expenses })
  // );
  return (
    <div>
      <h2>Let's Make To DO List</h2>
      <Expenses cart={expenses}/>
    </div>
  );
}

export default App;
