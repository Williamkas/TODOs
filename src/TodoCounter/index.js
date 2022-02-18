import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

// export default TodoCounter; ésta es una manera de exportar la función, pero al momento de importarla hay que colocar el nombre exacto porque sino se generan errores más dificiles de ubicar.

export {TodoCounter}; /*De ésta manera al importar la función si cometo un typo react me dará un error*/