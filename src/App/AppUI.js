import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI(){
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    }= React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            
            <TodoList> 
                {error && <p className="prevew">There´s an error...</p>}
                {loading && <p className="prevew">Loading...</p>} {/*si loading es true entonces escribre <p>...</p>*/}
                {(!loading && !searchedTodos.length) && 
                    <div className="inicio">
                        <p className="prevew">¡Create your first TO-DO!</p>
                        <img className='lista' src='https://media.istockphoto.com/photos/shoppinglist-concept-picture-id1072899070?k=20&m=1072899070&s=612x612&w=0&h=2Kg5Mo5kci5adRQJV_QYFnLlHcbjmYiBg3io0jM7ijs=' alt='lista'></img>
                    </div>
                    
                }


                {searchedTodos.map( todo => (
                    <TodoItem 
                    key={todo.text} //Para evitar renders innecesarios se debe colocar la propiedad key para enviar identificadores únicos a cada uno de nuestros componentes. En este caso el text es la única propiedad diferente de cada elemento del array Todos.
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    /> 
                ))} 
            </TodoList> 

            {openModal && ( //Si openModel is true (es lo mismo que hacer !!openModal) entonces ejecuta (<Modal>...</Modal>)
                <Modal>
                    <TodoForm/>
                </Modal>  
            )}              
            
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
      
        </React.Fragment>
    )
}

export {AppUI};