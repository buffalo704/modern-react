import {Book} from "../types/Book.type";
import {useState} from "react";
import {BookEdit} from "./BookEdit";

interface BookShowProps {
  book: Book;
  onDelete: (id:number) => void;
  onEdit:(id:number, title:string) => void;
}

export const BookShow = ({book, onDelete, onEdit}:BookShowProps) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id: number, title: string) => {
    setShowEdit(false);
    onEdit(id, title);
  }

  const content = showEdit ? <BookEdit book={book} onSubmit={handleSubmit}/>: <h3>{book.title}</h3>;

  return (<div className="book-show">
    <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
    <div>{content}</div>
  <div className="actions">
    <button className="edit" onClick={handleEditClick}>Edit</button>
    <button className="delete" onClick={handleDeleteClick}>Delete</button>
  </div> </div>);
}
