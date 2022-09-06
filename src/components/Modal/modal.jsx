import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({ isOpen, children, handleClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modalOverlay"></div>
      <div className="modalContainer">
        <p className="close" data-testid="close" onClick={handleClose}></p>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
