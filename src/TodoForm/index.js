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

    //Acá quiero que cuando se ingrese un dato vacío no se cree el TODO.
    // const onSubmit = (event ) => {
    //     event.preventDefault(); //Este es un método que tiene javaScript para evitar que se recargue la página al clickear el submit.
    //     if(!textarea.value){
    //         alert('Esta vacío')
    //     } else{
    //         setnewTodoValue(event.target.value)
    //         addTodo(newTodoValue);
    //         setOpenModal(false)
    //     }

    // }

    const onSubmit = (event ) => {
        event.preventDefault(); //Este es un método que tiene javaScript para evitar que se recargue la página al clickear el submit.
        setnewTodoValue(event.target.value)
        addTodo(newTodoValue);
        setOpenModal(false)
        

    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TO-DO</label>

            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Study web development...'
            />

            <div className="TodoForm-buttonContainer">
                <button 
                type='button' 
                onClick={onCancel}
                className='TodoForm-button TodoForm-button-cancel'
                >
                    Cancel
                </button>

                <button 
                type='submit'
                className='TodoForm-button TodoForm-button-add'
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export {TodoForm}