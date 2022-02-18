import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos= [
//    { text: 'Cortar cebolla', completed:true},
//    { text: 'Tomar el curso intro de React', completed:false},
//    { text: 'Bailar con la llorona', completed:true},
//    { text: 'Jugar futbol', completed:false}
//  ]

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;


