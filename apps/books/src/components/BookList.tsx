import {Book} from "../types/Book.type";
import {BookShow} from "./BookShow";

interface BookListProps {
  books: Book[];
  onDelete: (id:number) => void;
  onEdit: (id:number, title: string) => void
}
export const BookList = ({books, onDelete, onEdit}:BookListProps) => {
  const BookShows = books.map(book => <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>)
  return (<div className="book-list">
    {BookShows}
  </div>);
}
