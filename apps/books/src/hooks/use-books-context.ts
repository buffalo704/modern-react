import {useContext} from "react";
import {BooksContext} from "../context/BooksContext";

export const useBooksContext = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error('useBookContext is undefined');
  }
  return context;
}
