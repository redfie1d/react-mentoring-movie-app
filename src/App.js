import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'Routes';
import 'App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
