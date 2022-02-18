import React from "react";
import './TodoList.css';

function TodoList(props){
    return (
        <section>
            <ul>
                {props.children} {/*Acá usamos el children para indicar que vamos a acceder a todas las propiedades hijo que estan dentro de TodoList en la AppUI */}
            </ul>
        </section>
    )
}

export {TodoList};