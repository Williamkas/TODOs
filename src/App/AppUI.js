import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoHeader} from '../TodoHeader';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { ChangeAlert } from "../ChangeAlert";

function AppUI(){
    const {
        error, 
        loading, 
        searchedTodos,
        searchValue,
        setSearchValue,
        completedTodos,
        descriptionTodo,
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        editTodo,
    }= React.useContext(TodoContext);

    return (
        <React.Fragment>
            
            <TodoHeader>
                <TodoCounter
                totalTodos={totalTodos} 
                completedTodos={completedTodos} 
                loading={loading}
                />
                
                <TodoSearch
                searchValue={searchValue} 
                setSearchValue={setSearchValue}  
                searchedTodos={searchedTodos}
                loading={loading}
                totalTodos={totalTodos}
                />
            </TodoHeader>
            
            <TodoList> 
                {error && <p className="prevew">There´s an error...</p>}
                {loading && <p className="prevew">Loading...</p>} {/*si loading es true entonces escribre <p>...</p>*/}
                {(!loading && !searchedTodos.length && !totalTodos) && 
                    <div className="inicio">
                        <p className="prevew">Create your first TO-DO!</p>
                        <img className='lista' src='https://media.istockphoto.com/photos/shoppinglist-concept-picture-id1072899070?k=20&m=1072899070&s=612x612&w=0&h=2Kg5Mo5kci5adRQJV_QYFnLlHcbjmYiBg3io0jM7ijs=' alt='lista'></img>
                    </div>
                }
                {(!!totalTodos && !searchedTodos.length) && <p className="prevewDos">There´s not TO-DOs that match with '{searchValue}'</p>}


                {searchedTodos.map( todo => (
                    <TodoItem 
                    key={todo.text} //Para evitar renders innecesarios se debe colocar la propiedad key para enviar identificadores únicos a cada uno de nuestros componentes. En este caso el text es la única propiedad diferente de cada elemento del array Todos.
                    text={todo.text}
                    description={todo.description}
                    id={todo.id}
                    show={todo.show}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.id)}
                    onDescription={() => descriptionTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    onEditTodo= {() => editTodo(todo.id, todo.text, todo.description)}
                    
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
      
            <ChangeAlert/>
            
        </React.Fragment>
    )
}

export {AppUI};