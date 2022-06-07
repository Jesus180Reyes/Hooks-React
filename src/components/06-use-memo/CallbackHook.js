import React, { useCallback, useState } from 'react'
import '../02-use-effect/effects.css'
import { ShowIncrement } from './ShowIncrement';
export const CallbackHook = () => {
    const [counter, setcounter] = useState(10);
    // const increment = () => {
    //     setcounter(counter + 1);
    // }
    const increment = useCallback(
        (num) => {
            setcounter(c => c + num);
        },
        [setcounter],
    )

    return (
        <div>
            <h1>use Callback Hook: {counter}</h1>

            <h1>Use CallbackHook</h1>
            <ShowIncrement increment={increment}></ShowIncrement>
            <button></button>
        </div>
    )
}
