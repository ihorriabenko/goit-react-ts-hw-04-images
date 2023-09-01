import { useEffect, useState } from 'react';
import { getImages } from '../api/api';
import { Hit } from '../types/types';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import './App.css';

const App: React.FC = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState<Hit[]>([]);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      setLoading(true);

      try {
        const data = await getImages(query, page);

        setShowBtn(page < Math.ceil(data.totalHits / 12));

        setHits((prev) => [...prev, ...data.hits]);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSubmit = (value: string) => {
    setQuery(value);
    setPage(1);
    setHits([]);
  };

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className='App'>
      <Searchbar handleSubmit={handleSubmit} />
      <ImageGallery hits={hits} />
      {showBtn && <Button content='Load more' handleClick={handleClick} />}
      {loading && <Loader />}
    </div>
  );
};

export default App;
