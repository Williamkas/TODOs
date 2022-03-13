import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton= () => {
        props.setOpenModal(prevState => !prevState) //De esta manera alterno el estado del setOpenModal de true a false y visceversa.
    }
    return (
    <>
        <p className="Add">Add</p>
        <button 
        className="CreateTodoButton"
        onClick={onClickButton}
        >
            +
        </button>
    </>
    )
}

export {CreateTodoButton}; 