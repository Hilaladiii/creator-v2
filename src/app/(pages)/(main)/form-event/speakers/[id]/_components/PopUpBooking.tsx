import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";
import LinkNav from "@/components/ui/Link";
interface PopUpBookingProps {
  show: boolean;
  onClose: () => void;
}

const PopUpBooking = ({ show, onClose }: PopUpBookingProps) => {
  return (
    <Modal show={show} onClose={onClose}>
      <h1 className="text-4xl font-bold">Booking was Successful</h1>
      <p className="text-lg font-medium mt-2">
        Please check your email further information from the speaker
      </p>
      <div className="flex w-full px-2 gap-8 mt-8">
        <LinkNav href="/transaction" size="wide">
          View Transaction
        </LinkNav>
        <Button label="Confirm" variant="third" size="wide" onClick={onClose} />
      </div>
    </Modal>
  );
};

export default PopUpBooking;
