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
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Loading...</p>} {/*si loading es true entonces escribre <p>...</p>*/}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

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