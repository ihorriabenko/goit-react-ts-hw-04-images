interface ButtonProps {
  content: string;
  query: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  updateUrl: (q: string, p: number) => void;
}

const Button: React.FC<ButtonProps> = ({
  content,
  query,
  page,
  setPage,
  updateUrl,
}): JSX.Element => {
  //loadMore
  const handleClick = () => {
    setPage((prev) => prev + 1);

    updateUrl(query, page + 1);
  };
  return (
    <button className='button' onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
