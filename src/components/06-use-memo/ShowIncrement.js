import React from 'react'

export const ShowIncrement = ({ increment }) => {
    console.log('me volvi a genear');

    return (
        <div>
            <button className='btn btn-primary' onClick={() => { increment(5); }}>Incremntar</button>
        </div>
    )
}
