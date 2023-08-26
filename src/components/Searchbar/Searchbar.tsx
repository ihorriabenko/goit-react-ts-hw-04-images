import { useState } from 'react';

interface SearchbarProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  updateUrl: (q: string, p: number) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  setPage,
  setQuery,
  updateUrl,
}): JSX.Element => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // searchImages
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!value.trim()) alert('Invalid query')

    if (value.trim()) {
      setPage(1);
      setQuery(value);
      updateUrl(value, 1);
    }

    setValue('');
  };

  return (
    <header className='searchbar'>
      <form className='searchForm' onSubmit={handleSubmit}>
        <button type='submit' className='searchForm-button'>
          <span className='button-label'>Search</span>
        </button>

        <input
          className='searchForm-input'
          value={value}
          onChange={handleChange}
          type='text'
          placeholder='Search images and photos'
        />
      </form>
    </header>
  );
};

export default Searchbar;
