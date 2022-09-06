import { useHistory } from 'react-router-dom';
import Logo from 'components/Logo/logo';
import Error404 from 'assets/404.png';
import Footer from 'components/Footer/footer';
import './ErrorPage.css';

const ErrorPage = () => {
  const history = useHistory();

  const redirect = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <>
      <div className="errorPageContainer">
        <div className="logoContainer">
          <Logo />
        </div>
        <div className="notFoundContainer">
          <h1>Page Not Found</h1>
          <img src={Error404} alt="Page Not Found"></img>
          <button onClick={redirect}>GO BACK TO HOME</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
