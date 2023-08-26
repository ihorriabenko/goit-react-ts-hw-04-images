import { FallingLines } from 'react-loader-spinner';

const Loader: React.FC = (): JSX.Element => {
  return (
    <div className='loader'>
      <FallingLines color='#3f51b5' width='100' visible={true} />
    </div>
  );
};

export default Loader;
