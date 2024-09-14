import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";

interface PopUpProposalProps {
  show: boolean;
  onClose: () => void;
}

const PopUpProposal = ({ show, onClose }: PopUpProposalProps) => {
  return (
    <Modal show={show} onClose={onClose}>
      <h1 className="text-4xl font-bold">Proposal Submission Successful</h1>
      <p className="text-lg font-medium mt-2">
        Please check your email for further information from the company
      </p>
      <div className="flex w-full px-2 gap-8 mt-8">
        <Button label="View Transaction" size="wide" />
        <Button label="Confirm" variant="third" size="wide" onClick={onClose} />
      </div>
    </Modal>
  );
};

export default PopUpProposal;
