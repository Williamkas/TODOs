import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoItem.css';

function TodoItem(props){
    
    // const {
    //     addTodo,
    // } = React.useContext(TodoContext);

    // const[editTodo, setEditTodo]= React.useState('');

    // const onEditValue = (event) => {
    //     setEditTodo(event.target.value);
    //     addTodo(editTodo, setEditTodo)
    // }
    

    return (
        <li className="TodoItem">
            <img src='https://media.istockphoto.com/vectors/green-tick-checkmark-vector-icon-for-checkbox-marker-symbol-vector-id1079725292?k=20&m=1079725292&s=612x612&w=0&h=PQB6T2JxK4NILecaf1MBcuZmvP2G5wYKNJ3doMsGVrk=' 
                 className={`Icon Icon-check ${(props.completed && 'Icon-check--active')|| (!props.completed && 'Icon-check--inactive')}`} 
                 onClick={props.onComplete} alt='check'>
            </img>

            <img src='https://media.istockphoto.com/photos/metal-ring-isolated-on-white-background-picture-id1184264524?k=20&m=1184264524&s=612x612&w=0&h=RyPlSzZfR6ONE67TqQchA_ecJJ4dUNYYdeXMg-nKvBc=' 
                 className={`Icon Icon-check ${(!props.completed && 'Icon-empty--active')|| (props.completed && 'Icon-empty--inactive')}`} 
                 onClick={props.onComplete} alt='empty check'>
            </img>

            <div className="Todofull">
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} 
                onClick={props.onDescription}
                >                                                                       {/* si props.complete es true, diferente de null o undefined  entonces si aplicara el estilo de la clase 'TodoItem-p--complete'*/}
                    {props.text}
                </p>

                <p className={`TodoItemDescription ${(!props.show && 'TodoItemDescriptionOff') || (props.completed && 'TodoItemDescriptionOffComplete') }`}>
                    
                    {props.description}
                   
                    {/* <input
                            type='text'
                            value={editTodo}
                            onChange={onEditValue}
                        >
                            {props.description}
                        </input> */}
                </p>

                {console.log(props.id)}

            </div>

            <div className="Icon-2">
                <span className="Icon-2 Icon-delete" onClick={props.onDelete}> {/* si necesito pasarle un argumento a la función debo usar un arrow function para que no se inicialice la función automáticamente antes de hacer click */}
                    x
                </span>
            </div>
        </li>
    )
}

export {TodoItem};