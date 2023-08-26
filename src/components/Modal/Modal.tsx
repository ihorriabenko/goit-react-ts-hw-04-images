import { useEffect } from 'react';

interface ModalProps {
  largeImageURL: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  largeImageURL,
  setShowModal,
}): JSX.Element => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowModal(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const modal = document.querySelector('.modal') as HTMLElement;
      if (modal && !modal.contains(e.target as Node)) {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='overlay'>
      <div className='modal'>
        <img src={largeImageURL} alt='img' />
      </div>
    </div>
  );
};

export default Modal;
