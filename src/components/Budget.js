import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);

    const setBudget = (value) => {
        if(value > 20000){
            alert("The value cannot exceed 20000");
            return;
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if(value < totalExpenses){
            alert("You cannot reduce the budget value lower than spending")
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        step={10}
                        style={{size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input></span>
        </div>
    );
};

export default Budget;
