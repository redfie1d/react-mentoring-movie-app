import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import SearchedMoviePage from 'pages/SearchedMoviePage/SearchedMoviePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/film/:id" component={MovieDetailsPage} />
      <Route path="/search" component={SearchedMoviePage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
