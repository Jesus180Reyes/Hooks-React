import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {
    const [formState, setformState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;
    useEffect(() => {
        // console.log('hey');
    }, []);
    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);
    useEffect(() => {
        // console.log('email changed');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setformState({
            ...formState,
            [target.name]: target.value,


        });
    }
    return (
        <>

            <h1>Simple Form</h1>
            <hr></hr>

            <div className='form-group'>
                <input type="text"
                    name="name"
                    className='form-control'
                    placeholder='Tu Nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}>

                </input>

            </div>
            <div className='form-group'>
                <input type="text"
                    name="email"
                    className='form-control'
                    placeholder='Tu Email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}>

                </input>

            </div>
            {(name === '123') && <Message />}


        </>
    )
}
