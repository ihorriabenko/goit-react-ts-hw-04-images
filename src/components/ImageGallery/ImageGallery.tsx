import { Hit } from '../../types/types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

interface ImageGalleryProps {
  hits: Hit[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ hits }): JSX.Element => {
  const elements = hits.map((el) => (
    <ImageGalleryItem key={el.id} webformatURL={el.webformatURL} largeImageURL={el.largeImageURL}/>
  ));

  return (
    <>{elements.length > 0 && <ul className='imageGallery'>{elements}</ul>}</>
  );
};

export default ImageGallery;
