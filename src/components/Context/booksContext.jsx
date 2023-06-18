import React, { createContext, useContext, useReducer } from "react";
import ProductReducer from "../Reducer/productReducer";


export const BookContext = createContext();

export default function BookProvider ({ children })  {

 const initalState = {
    habitsData :[],
    archiveData:[]
};

  const [state, dispatch] = useReducer(ProductReducer, initalState);



   const addToArchive = (data) => {
    dispatch({type:"ADD_NEW_ARCHIVE",payload:data})
  };

console.log(state.archiveData);
  return (
    <BookContext.Provider value={{ ...state,dispatch,addToArchive}}>
      {children}
    </BookContext.Provider>
  );
};

const useBookContext = ()=> {
    return useContext(BookContext)
}

export {useBookContext}
