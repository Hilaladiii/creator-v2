interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white py-16 px-28 flex flex-col items-center justify-center rounded-xl transform transition-transform duration-300 ${
          show ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
