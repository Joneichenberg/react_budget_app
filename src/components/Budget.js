/*
 importing app context and the useContext hook, and pass my AppContext to it - this is how a component 
 connects to the context in order to get values from global state.
 This is adding text and value to the budget.
 */
 import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const changeBudget = (val)=>{

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        val = parseInt(val);
        if(val > 20000)
        {
            alert('The value can not be more than 20,000');
        }
        if(val < totalExpenses)
        {
            alert('You cannot reduce the budget value lower than the spending');
        }
        else
        {
            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(val),
            })
        }
    }

    return (
        <div className='alert alert-secondary' style={{'display': 'flex', 'flexDirection':'row'}}>
            <span>Budget:{currency} </span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{size: 10}}
                step='10'
                max= '20000'
                onChange= {(event) => changeBudget(event.target.value)}>
                </input>
        </div>
    );
};

export default Budget;
