import React from "react";
import { TodoContext } from "../TodoContext";
import './form.css'

function TodoForm() {
    const[newTodoValue, setnewTodoValue]= React.useState('');
    const[newTodoDescription, setnewTodoDescription]= React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChangeValue = (event) => {
        setnewTodoValue(event.target.value);
    }
    const onChangeDescription = (event) => {
        setnewTodoDescription(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event ) => {
        event.preventDefault(); //Este es un método que tiene javaScript para evitar que se recargue la página al clickear el submit.
        if(!newTodoValue && !newTodoDescription){
            alert('Please add the name or the description of the new To-Do.')
        } else{
            setnewTodoValue(event.target.value)
            setnewTodoDescription(event.target.value)
            addTodo(newTodoValue, newTodoDescription);
            setOpenModal(false)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TO-DO</label>

            <input
                type="text"
                value={newTodoValue}
                onChange={onChangeValue}
                placeholder='Title'
            />

            <textarea
                value={newTodoDescription}
                onChange={onChangeDescription}
                placeholder='Details'
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