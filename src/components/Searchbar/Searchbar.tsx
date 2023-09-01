import { useState } from 'react';

interface SearchbarProps {
  handleSubmit: (value: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ handleSubmit }): JSX.Element => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.trim()) alert('Invalid query');

    if (value.trim()) {
      handleSubmit(value);
    }

    setValue('');
  };

  return (
    <header className='searchbar'>
      <form className='searchForm' onSubmit={onSubmit}>
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
