import { ChangeEvent, FormEvent, useState } from 'react';
import './SearchBar.css';
interface SearchBarProps {
  onSubmit: (term: string) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [term, setTerm] = useState<string>('');

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm((event.target as HTMLInputElement).value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input onChange={handleChange} value={term} />
      </form>
    </div>
  );
};
