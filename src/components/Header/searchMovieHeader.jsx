import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import './searchMovieHeader.css';

import Logo from 'components/Logo/logo';
import Modal from 'components/Modal/modal';
import AddMovieForm from 'components/Forms/AddMovieForm/addMovieForm';
import SearchBarField from 'components/Fields/SearchBarField/searchBarField';

const SearchMovieHeader = () => {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => setIsModalOpen(false);

  return (
    <header className="headerContainer">
      <div className="titleContainer">
        <Logo />
        <button onClick={() => setIsModalOpen(true)}>+ADD MOVIE</button>
      </div>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values) => {
          history.push(`/search?search=${values.search}`);
        }}
      >
        <Form className="searchContainer">
          <SearchBarField
            label="FIND YOUR MOVIE"
            name="search"
            type="text"
            placeholder="What do you want to watch?"
          />
        </Form>
      </Formik>
      <Modal isOpen={isModalOpen} handleClose={handleClose}>
        <AddMovieForm handleClose={handleClose} />
      </Modal>
    </header>
  );
};

export default SearchMovieHeader;
