import Modal from "@/components/Modal";

interface PopUpVerifProps {
  show: boolean;
  onClose: () => void;
}
const PopUpVerif = ({ show, onClose }: PopUpVerifProps) => {
  return (
    <Modal show={show} onClose={onClose}>
      <h1 className="text-4xl font-bold">Regisration Access</h1>
      <p className="font-medium text-lg">
        Please check your email to activate your account
      </p>
    </Modal>
  );
};

export default PopUpVerif;
