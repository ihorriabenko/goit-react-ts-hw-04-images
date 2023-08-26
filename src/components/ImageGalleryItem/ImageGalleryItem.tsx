import { useState } from 'react';
import Modal from '../Modal/Modal';

interface ImageGalleryItemProps {
  webformatURL: string;
  largeImageURL: string;
}

const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
  webformatURL,
  largeImageURL,
}): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true)
  };

  return (
    <li className='imageGalleryItem' onClick={handleClick}>
      <img className='imageGalleryItem-image' src={webformatURL} alt='img' />
      {showModal && <Modal largeImageURL={largeImageURL} setShowModal={setShowModal}/>}
    </li>
  );
};

export default ImageGalleryItem;
