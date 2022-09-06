import { useHistory } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  const history = useHistory();

  const handleLogo = () => {
    history.push('/');
  };

  return (
    <span onClick={handleLogo}>
      <b>netflix</b>roulette
    </span>
  );
};

export default Logo;
