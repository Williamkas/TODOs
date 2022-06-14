import React, {useState} from "react";
import { TodoContext } from "../TodoContext";
import './form.css'

function TodoForm() {
    const[newTodoText, setnewTodoText]= useState('');
    const[newTodoDescription, setnewTodoDescription]= useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChangeText = (event) => {
        setnewTodoText(event.target.value);
    }
    const onChangeDescription = (event) => {
        setnewTodoDescription(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event ) => {
        event.preventDefault(); //Este es un método que tiene javaScript para evitar que se recargue la página al clickear el submit.
        if(!newTodoText && !newTodoDescription){
            alert('Please add the name or the description of the new To-Do.')
        } else{
            addTodo(newTodoText, newTodoDescription);
            setOpenModal(false)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new TO-DO</label>

            <input
                type="text"
                value={newTodoText}
                onChange={onChangeText}
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