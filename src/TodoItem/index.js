import React from "react";
import './TodoItem.css';

function TodoItem(props){
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}> 
                √
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}> {/* si props.complete es true, diferente de null o undefined  entonces si aplicara el estilo de la clase 'TodoItem-p--complete'*/}
                {props.text}
            </p>

            <div className="Icon-2">
                <span className="Icon-2 Icon-delete" onClick={props.onDelete}> {/* si necesito pasarle un argumento a la función debo usar un arrow function para que no se inicialice la función automáticamente antes de hacer click */}
                    x
                </span>
            </div>
        </li>
    )
}

export {TodoItem};