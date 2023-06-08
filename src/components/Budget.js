/*
 importing app context and the useContext hook, and pass my AppContext to it - this is how a component 
 connects to the context in order to get values from global state.
 This is adding text and value to the budget.
 */
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
        </div>
    );
};
export default Budget;
