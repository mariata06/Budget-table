import React, {useState} from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        // console.log('Expenses.js'); 
        // console.log(selectedYear);
        setFilteredYear(selectedYear)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {props.items.map((expense) => 
                    <ExpenseItem 
                        key={expense.id} 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />)}
            </Card>
        </div>
        
    )
}

export default Expenses;