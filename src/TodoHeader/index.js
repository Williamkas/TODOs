import React from "react";
import './TodoHeader.css';

const TodoHeader = ({children}) => {

    return (
        <header>
            {children}
        </header>
    )
}

export {TodoHeader};
