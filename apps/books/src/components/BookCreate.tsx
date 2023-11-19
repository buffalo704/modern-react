import {ChangeEvent, FormEvent, useState} from "react";

interface BookCreateProps {
  onCreate: (title: string) => void
}

export const BookCreate = ({ onCreate}: BookCreateProps) => {
  const [title, setTitle] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onCreate(title);
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
