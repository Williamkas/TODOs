import React from "react";
import { TodoContext } from "../TodoContext";
import './form.css'

function TodoForm() {
    const[newTodoValue, setnewTodoValue]= React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setnewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event ) => {
        event.preventDefault(); //Este es un método que tiene javaScript para evitar que se recargue la página al clickear el submit.
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>

            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Estudiar programación...'
            />

            <div className="TodoForm-buttonContainer">
                <button 
                type='button' 
                onClick={onCancel}
                className='TodoForm-button TodoForm-button-cancel'
                >
                    Cancelar
                </button>

                <button 
                type='submit'
                className='TodoForm-button TodoForm-button-add'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}