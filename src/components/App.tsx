import { useEffect, useState } from 'react';
import { Data, Hit } from '../types/types';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import './App.css';
import Loader from './Loader/Loader';

const App: React.FC = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('');
  const [hits, setHits] = useState<Hit[]>([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url) {
      getData();
    }
  }, [url]);

  const getData = async () => {
    setLoading(true);

    try {
      let response = await fetch(url);
      let data: Data = await response.json();

      setShowBtn(page < Math.ceil(data.totalHits / 12));

      if (page === 1) return setHits([...data.hits]);

      setHits((prev) => [...prev, ...data.hits]);
    } catch (error) {
      throw new Error();
    } finally {
      setLoading(false);
    }
  };

  const updateUrl = (q: string, p: number) => {
    let newUrl = `https://pixabay.com/api/?q=${q}&page=${p.toString()}&key=27832642-aa50f7f08c8a181668a8915c7&image_type=photo&orientation=horizontal&per_page=12`;

    setUrl(newUrl);
  };

  return (
    <div className='App'>
      <Searchbar setPage={setPage} setQuery={setQuery} updateUrl={updateUrl} />
      <ImageGallery hits={hits} />
      {showBtn && (
        <Button
        content='Load more'
        page={page}
        query={query}
        setPage={setPage}
        updateUrl={updateUrl}
        />
        )}
        {loading && <Loader />}
    </div>
  );
};

export default App;
