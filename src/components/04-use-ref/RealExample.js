import React, { useState } from 'react'
import { MultipleCustomHook } from '../examples/MultipleCustomHook'
import '../02-use-effect/effects.css'

export const RealExample = () => {
    const [show, setshow] = useState(false);
    const sShow = () => {
        setshow(!show);
    }



    return (
        <div>
            <h1>RealExample</h1>

            {show && <MultipleCustomHook />}
            <button className='btn btn-primary mt-5' onClick={sShow}>HIDE</button>
        </div>
    )
}
