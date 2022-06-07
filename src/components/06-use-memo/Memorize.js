import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import "../02-use-effect/effects.css";
import { Small } from './Small';

export const Memorize = () => {

    const newSetShow = () => {
        setshow(!show);
    }

    const { state, increment } = useCounter(10);
    const [show, setshow] = useState(true);
    return (
        <div>
            <h1>Memorize</h1>
            <h1><Small value={state} /></h1>
            <hr></hr>
            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className='btn btn-outline-primary ml3' onClick={newSetShow}>Show/Hide {JSON.stringify(show)}</button>

        </div>
    )
}
