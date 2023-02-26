import { useState } from 'react';
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';


function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');
    
    const filterChangeHandler = (year) => {
        setFilteredYear(year);
        console.log(`From Expenses: {year}`);
    }
    const filteredExpenses = props.items.filter(
        expense => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler} 
                />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}


export default Expenses;