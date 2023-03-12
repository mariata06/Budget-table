import React from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 250,
      date: new Date(2023, 2, 12),
    },
    {
      title: "gas",
      amount: 50,
      date: new Date(2022, 1, 10),
    },
    {
      title: "electricity",
      amount: 100,
      date: new Date(2020, 5, 20),
    },
    {
      title: "food",
      amount: 200,
      date: new Date(2022, 3, 7),
    },
    {
      title: "react course",
      amount: 1000,
      date: new Date(2020, 4, 15),
    },
    {
      title: "Books",
      amount: 200,
      date: new Date(2023, 2, 22),
    },
    {
      title: "booking",
      amount: 500,
      date: new Date(2021, 6, 25),
    },
  ]
  return (
    <div className="App">     
      <h2>Hello React!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date } />
    </div>
  );
}

export default App;
