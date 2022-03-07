import React from "react";

function useLocalStorage(itemName, initialValue){ //Este es nuetro custom Hooks!
    const [error, setError]= React.useState(false);
    const [loading, setLoading]= React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=> {
      setTimeout(()=> {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if(!localStorageItem) { //Si localStorageItem es false, es decir, está vacío...
            localStorage.setItem(itemName, JSON.stringify(initialValue)); //usamos el JSON.stringify([]) dado que el localStorage sólo puede almacenar strings.
            parsedItem = initialValue; //Inicialmente lo creamos como un array vacío.
          } else {
            parsedItem = JSON.parse(localStorageItem); //Luego usamos JSON.parse(localStorageTodos) para volver a convertir el string en un array de objetos.
          }
  
          setItem(parsedItem);
          setLoading(false);
          }
          catch {
            setError(error)
        }
  
      },2000)
    },[])

        // React.useEffect(()=>{
      //   console.log('useeffect')
      // },[totalTodos]) //Al colocar el array vacío como segundo parámetro de la función estamos hacia que el useefect se efecute sólo una vez al inicio luego del primer renderizado de react. Si quitamos el [] entonces el useefect se ejecutará con cada renderizado de react. 

  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem) //Primero actualizo el valor en el localStorage
        setItem(newItem) //Después actualizo el setItem.
      }
      catch{
        setError(error)
      }
    }
  
    return { //Cuando se crean hooks que retornen mas de 2 elementos se recomienda enviar objetos en vez de arrays, por eso cambiamos en el return el [] por {}
      item,
      saveItem,
      loading,
      error
    };
  }

  export {useLocalStorage};