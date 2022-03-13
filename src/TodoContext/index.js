import React from "react";
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item:todos, 
        saveItem:saveTodos, 
        loading,
        error} = useLocalStorage('TODOS_V1', []); //Ese es el llamdo del custom Hooks que creamos.
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length; // El signo !! es lo mismo que hacer: todo.completed==true y el signo ! es lo mismo que hacer: todo.completed==false. El filter genera un nuevo array que concuerdan con las condiciones indicadas, en este caso, todos los completed que sean true. Luego con el length obtengo la cantidad de completed==true.
      const totalTodos = todos.length;
    
      let searchedTodos = [];
      if(searchValue.length >= 1){ //Acá veo si la longitud del string searchValue es mayor a 0, es decir, si el usuario ha escrito algo en el input.
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase(); //Primero lo paso todo   minúsculas para poder compararlo sin distinción de mayúsculas o minúsculas
          const searchText = searchValue.toLowerCase(); //Igual acá.
          return todoText.includes(searchText); //Retornamos la condición de evalución del filter.
        });
      } else { 
        searchedTodos = todos;
      }

      //Añadir ToDo's
      const addTodo = (text, description)=> {
        const newTodos = [...todos]; 
        newTodos.push({
          completed:false,
          show:false,
          text,
          description,
        }); 
        saveTodos(newTodos)
      };

    //   //Editar ToDo
    //   const onEditValue = (text, event) => {
    //     const newTodos = [...todos]; 
    //     newTodos.push({
    //       text,
    //       description,
    //     }); 
    //     setnewTodoValue(event.target.value);
    // }

      //Completar y descompletar To-Do's
      const completeTodo = (text)=> {
        const todoIndex = todos.findIndex(todo => todo.text === text); //en este caso usamos el texto dado que es lo unico que identifica cada elemento del array de todos. Si tuvieramos un id lo usaríamos.
        const newTodos = [...todos]; //Acá estoy clonando el array todos, dado que NO se puede editar el estado de react, pero si le puedo enviar una nueva lista igual, usando el ...todos.
        if (newTodos[todoIndex].completed){
          newTodos[todoIndex].completed=false
        } else(newTodos[todoIndex].completed=true)
        saveTodos(newTodos)
      };

      //Mostrar y Ocultar Description de To-Do's
      const descriptionTodo = (text)=> {
        const todoIndex = todos.findIndex(todo => todo.text === text); //en este caso usamos el texto dado que es lo unico que identifica cada elemento del array de todos. Si tuvieramos un id lo usaríamos.
        const newTodos = [...todos]; //Acá estoy clonando el array todos, dado que NO se puede editar el estado de react, pero si le puedo enviar una nueva lista igual, usando el ...todos.
        if (newTodos[todoIndex].show){
          newTodos[todoIndex].show=false
        } else(newTodos[todoIndex].show=true)
        saveTodos(newTodos)
      };

      //Eliminar tareas
      const deleteTodo = (text)=> {
        const todoIndex = todos.findIndex(todo => todo.text === text); //en este caso usamos el texto dado que es lo unico que identifica cada elemento del array de todos. Si tuvieramos un id lo usaríamos.
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1); //En el primer espacio del splice indicamos a partir de qué índice vamos a cortar el array y en el segundo espacio indicamos la cantidad de elementos que se van a cortar del array.
        saveTodos(newTodos) //Acá vamos a producir un reRender de nuestro componente para que reciba la nueva lista de todos.
      };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            descriptionTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};

