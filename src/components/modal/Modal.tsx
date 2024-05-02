import { CloseIcon } from '@/assets/icons';
import styles from './Modal.module.css';
import { ModalProps } from '@/interface/components';


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='modalOverlay'>
      <div className={`modalContent ${className}`}>
        <button className='closeButton' onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
