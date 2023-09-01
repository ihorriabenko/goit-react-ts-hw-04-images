interface ButtonProps {
  content: string;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  content,
  handleClick,
}): JSX.Element => {
  return (
    <button className='button' onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
