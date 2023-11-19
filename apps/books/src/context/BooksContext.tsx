import {createContext, PropsWithChildren, useCallback, useState} from 'react';
import { Book } from '../types/Book.type';
import axios from 'axios';

interface BooksContextType {
  books: Book[];
  deleteBookById: (id: number) => Promise<void>;
  editBookById: (id: number, title: string) => Promise<void>;
  createBook: (title: string) => Promise<void>;
  fetchBooks: () => Promise<void>;
}

export const BooksContext = createContext<BooksContextType | undefined>(undefined);

export const Provider = ({ children }: PropsWithChildren) => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = useCallback(async () => {
    const { data } = await axios.get('http://localhost:3001/books');
    setBooks(data);
  },[]);

  const createBook = async (title: string): Promise<void> => {
    const { data } = await axios.post('http://localhost:3001/books', {
      title,
    });
    setBooks([...books, data]);
  };

  const deleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBookById = async (id: number, title: string) => {
    const { data } = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, ...data };
        }
        return book;
      })
    );
  };

  const contextValue: BooksContextType = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};

