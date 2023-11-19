import { BookShow } from './BookShow';
import {useBooksContext} from "../hooks/use-books-context";

export const BookList = () => {
  const { books } = useBooksContext();
  const BookShows = books.map((book) => <BookShow key={book.id} book={book} />);
  return <div className="book-list">{BookShows}</div>;
};
