import React, { useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        desc: "Aprender React",
        done: false,
    }
];
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const { formValues, handleInputChange } = useForm({
        description: '',
    });
    console.log(formValues.description);

    console.log(todos);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            desc: "Nueva Tarea",
            done: false,
        };
        const action = {
            type: 'add',
            payload: newTodo,
        }
        dispatch(action);
    }
    return (
        <div>
            <h1>Todo App ({todos.length})</h1>
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((todo, i) => {
                                return <li key={todo.id} className="list-group-item"><p className='text-center complete'>{i + 1}. {todo.desc}</p>
                                    <button className='btn btn-danger'>Borrar</button>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr></hr>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='description' placeholder='Aprender...' autoComplete='off' className='form-control' value={formValues.description} onChange={handleInputChange}></input>
                        <button className='btn btn-outline-primary mt-1 btn-block' type='submit' >Agregar</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
