import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './moreVertButton.css';
import Modal from 'components/Modal/modal';
import EditMovieForm from 'components/Forms/EditMovieForm/editMovieForm';
import DeleteMovieForm from 'components/Forms/DeleteMovieForm/deleteMovieForm';

const useStyles = makeStyles({
  iconBg: {
    background: '#232323',
    '&:hover': {
      background: '#424242',
    },
  },
  moreVert: {
    color: 'white',
  },
  menu: {
    '& .MuiPaper-root': {
      backgroundColor: '#232323',
    },
  },
  menuItem: {
    background: '#232323',
    color: 'white',
    '&:hover': {
      background: '#F65261',
    },
  },
});

const MoreVertButton = ({ movie }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => setIsModalOpen(false);

  const [menuItemSelected, setMenuItemSelected] = useState('');

  return (
    <div className="moreVertWrapper">
      <IconButton
        className={classes.iconBg}
        aria-label="more"
        aria-controls="moviecard-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <MoreVertIcon className={classes.moreVert} />
      </IconButton>
      <Menu
        className={classes.menu}
        id="moviecard-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            setIsModalOpen(true);
            handleMenuClose();
            setMenuItemSelected('edit');
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            setIsModalOpen(true);
            handleMenuClose();
            setMenuItemSelected('delete');
          }}
        >
          Delete
        </MenuItem>
      </Menu>
      <Modal isOpen={isModalOpen} handleClose={handleModalClose}>
        {menuItemSelected === 'edit' ? (
          <EditMovieForm originalMovie={movie} handleClose={handleModalClose} />
        ) : (
          <DeleteMovieForm movie={movie} handleClose={handleModalClose} />
        )}
      </Modal>
    </div>
  );
};

export default MoreVertButton;
