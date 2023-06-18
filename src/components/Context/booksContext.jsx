import React, { createContext, useContext, useReducer } from "react";
import ProductReducer from "../Reducer/productReducer";
// import { v4 as uuidv4 } from 'uuid';

// import { booksData } from "../data";

export const BookContext = createContext();

export default function BookProvider ({ children })  {

 const initalState = {
    habitsData :[],
    archiveData:[]
};

  const [state, dispatch] = useReducer(ProductReducer, initalState);

//   const changeCategoryHandler = (bookId, selectedCategory) => {
//     let updatedBooks = [...books];
//     updatedBooks = books.map((book) => {
//       return book.id === bookId
//         ? { ...book, category: selectedCategory }
//         : book;
//     });
//     setBooks(updatedBooks);
//   };console.log( habit)
//  const [archive,setArchive] = useState([])

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