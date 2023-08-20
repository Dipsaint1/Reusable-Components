/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import Constants from './Constants';
import { UseGlobalContext } from '../contexts/GlobalContext';

Modal.setAppElement('#root');

const CustomModal = ({ children, contentLabel }) => {
  const { modalIsOpen, closeModal } = UseGlobalContext();
  return (
    <Modal 
      style={Constants.defaultModalStyle} 
      isOpen={modalIsOpen} 
      onRequestClose={closeModal} 
      contentLabel={contentLabel ? contentLabel : 'Apply Filter'}
    > 
    { children }
    </Modal>
  )
}

export default CustomModal;