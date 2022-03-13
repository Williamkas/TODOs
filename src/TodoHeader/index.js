import React from "react";
import './TodoHeader.css';

const TodoHeader = ({children}) => {

    return (
        <header className="header">
            {children}
        </header>
    )
}

export {TodoHeader};
