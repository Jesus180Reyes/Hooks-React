import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';
export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;
    useEffect(() => {
        // console.log('hey');
    }, []);
    // useEffect(() => {
    //     // console.log('formState changed');
    // }, [formState]);
    useEffect(() => {
        // console.log('email changed');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);

    }
    useEffect(() => {
        console.log('email changed');

        // return () => {
        //     second
        // }
    }, [email])


    return (
        <form onSubmit={handleSubmit}>

            <h1>Form With Custom Hook</h1>
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
            <div className='form-group'>
                <input type="password"
                    name="password"
                    className='form-control'
                    placeholder='*****'
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}>

                </input>

            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>


        </form>
    )
}
