import {ChangeEvent, FormEvent, useState} from "react";
import {Book} from "../types/Book.type";

interface BookEditProps {
  book: Book;
  onSubmit: (id:number, title: string) => void;
}
export const BookEdit= ({book, onSubmit}:BookEditProps) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event?.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(book.id, title);
  }

  return <form className="book-edit" onSubmit={handleSubmit}>
    <label>Title</label>
    <input className="input" onChange={handleChange} value={title}/>
    <button className="button is-primary">Save</button>
  </form>;
}
