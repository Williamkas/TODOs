import React from "react";
import './TodoSearch.css'
import lupa from '../assets/3844432-magnifier-search-zoom_110300.png';

function TodoSearch ({searchValue, setSearchValue, loading, searchedTodos, totalTodos}){

    const onSearchValueChange = (event) => {
        console.log(event.target.value) //Con target.value obtenemos resultado o el valor cada vez que se usa el teclado, o se ingresa un dato.
        setSearchValue(event.target.value)
    }

    return (
        
        <div className="searcher">
            <input 
                className='TodoSearch' 
                placeholder="Search"   
                onChange={onSearchValueChange} //El evento onchange se produce cuando el valor de un elemento se ha cambiado.
                value={searchValue} // React nos pide que lo conectamos con nuestro estado. 
                disabled={loading || (!loading && !searchedTodos.length && !totalTodos)}
            />  
            <img 
                className={`lupita ${(loading || (!loading && !searchedTodos.length && !totalTodos)) && 'lupita-disabled'}`} 
                src={lupa} 
                alt='lupa'
            >
            </img>
        </div>
        
    )
}

export {TodoSearch};