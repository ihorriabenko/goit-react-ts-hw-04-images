import { useEffect } from 'react';

interface ModalProps {
  largeImageURL: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  largeImageURL,
  setShowModal,
}): JSX.Element => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [setShowModal]);

  const handleClickOutside: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div className='overlay' onClick={handleClickOutside}>
      <div className='modal'>
        <img src={largeImageURL} alt='img' />
      </div>
    </div>
  );
};

export default Modal;
