import {useEffect, useState} from "react";
import { BookCreate } from "../components/BookCreate";
import {BookList} from "../components/BookList";
import {Book} from "../types/Book.type";
import axios from "axios";

export function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  },[]);

  const fetchBooks = async () => {
    const {data} = await axios.get('http://localhost:3001/books');
    setBooks(data);
  }

  const createBook = async (title: string): Promise<void> => {
    const { data } = await axios.post('http://localhost:3001/books', {
      title
    });
    setBooks([...books, data])
  }

  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter(book => book.id !== id));
  }

  const editBookById = async (id:number, title: string) => {
    const { data } = await axios.put(`http://localhost:3001/books/${id}`, {
      title
    });

    setBooks(books.map(book => {
      if (book.id === id) {
        return { ...book, ...data};
      }
      return book;
    }))
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
