import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';
import "../02-use-effect/effects.css";

export const MemoHook = () => {

    const newSetShow = () => {
        setshow(!show);
    }

    const { state, increment } = useCounter(5000);
    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);
    const [show, setshow] = useState(true);
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>{state}</h3>
            <p>{memoProcesoPesado}</p>
            <hr></hr>
            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className='btn btn-outline-primary ml3' onClick={newSetShow}>Show/Hide {JSON.stringify(show)}</button>

        </div>
    )
}
