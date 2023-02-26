import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import {useState} from "react";

const NewExpense = (props) => {

    const [displayForm, setDisplayForm] = useState(false);

    const addNewExpenseHandler = () => {
        setDisplayForm(true);
    }

    const cancelHandler = () => {
        setDisplayForm(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setDisplayForm(false);
    };


    return (
            <div className="new-expense">
                {displayForm?
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/> :
                    <button type='button' onClick={addNewExpenseHandler}>Add New Expense</button>}
            </div>
    )
};

export default NewExpense;