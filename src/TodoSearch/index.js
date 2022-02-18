import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch (){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value) //Con target.value obtenemos resultado o el valor cada vez que se usa el teclado, o se ingresa un dato.
        setSearchValue(event.target.value)
    }

    return (
        <input 
            className='TodoSearch' 
            placeholder="Buscar "   
            onChange={onSearchValueChange} //El evento onchange se produce cuando el valor de un elemento se ha cambiado.
            value={searchValue} // React nos pide que lo conectamos con nuestro estado. 
        />
    )
}

export {TodoSearch};