import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-use-effect/effects.css';
export const MultipleCustomHook = () => {

    const { state, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    // console.log(state);

    const { author, quote } = !!data && data[0];
    return (
        <div>
            <h1>Custom Hook!!!</h1>

            {
                loading ?
                    (

                        <div className='alert alert-info text-center'>
                            loading...
                        </div>
                    )
                    : (

                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'>{quote}</p>
                            <footer className='blockquoute-footer'>{author}</footer>
                        </blockquote>
                    )

            }
            <button className='btn btn-primary' onClick={increment}>
                Siguiente Frase
            </button>


        </div>
    )
}
