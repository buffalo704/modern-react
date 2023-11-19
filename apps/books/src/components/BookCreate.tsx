import {ChangeEvent, FormEvent, useState} from "react";
import {useBooksContext} from "../hooks/use-books-context";

export const BookCreate = () => {
  const [title, setTitle] = useState<string>('');
  const { createBook } = useBooksContext();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await createBook(title);
    setTitle('');
  }

  return (<div className="book-create">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" onChange={handleChange} value={title}/>
      <button className="button">Create!</button>
    </form>
  </div>);
}
