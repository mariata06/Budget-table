import React, {useState} from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        // console.log('Expenses.js'); 
        // console.log(selectedYear);
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpenses}/>
                {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem 
                            key={expense.id} 
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date} 
                        />
                    ))
                }
            </Card>
        </div>
        
    )
}

export default Expenses;