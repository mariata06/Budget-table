import React from 'react';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: "Car Insurance",
      amount: 250,
      date: new Date(2023, 2, 12),
    },
    {
      id: 'e2',
      title: "Gas",
      amount: 50,
      date: new Date(2022, 1, 10),
    },
    {
      id: 'e3',
      title: "Electricity",
      amount: 100,
      date: new Date(2020, 5, 20),
    },
    {
      id: 'e4',
      title: "Food",
      amount: 200,
      date: new Date(2022, 3, 7),
    },
    { 
      id: 'e5',
      title: "React Course",
      amount: 1000,
      date: new Date(2020, 4, 15),
    },
    {
      id: 'e6',
      title: "Books",
      amount: 200,
      date: new Date(2023, 2, 22),
    },
    {
      id: 'e7',
      title: "Booking",
      amount: 500,
      date: new Date(2021, 6, 25),
    },
  ]
  return (
    <div className="App">     
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
