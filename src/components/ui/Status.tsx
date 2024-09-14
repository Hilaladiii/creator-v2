import { cn } from "@/utils/cn";

interface StatusProps {
  status:
    | "WAITING"
    | "APPROVED"
    | "NOT_APPROVED"
    | "WAITING_PAYMENT"
    | "SUCCESS_PAYMENT";
}

const Status = ({ status }: StatusProps) => {
  let statusText;
  switch (status) {
    case "WAITING_PAYMENT":
      statusText = "WAITING PAYMENT";
      break;
    case "SUCCESS_PAYMENT":
      statusText = "SUCCESS PAYMENT";
      break;
    case "APPROVED":
      statusText = "APPROVED";
      break;
    case "NOT_APPROVED":
      statusText = "NOT APPROVED";
      break;
    case "WAITING":
      statusText = "WAITING TO APPROVE";
      break;
    default:
      statusText = "UNKNOWN STATUS";
      break;
  }

  return (
    <div
      className={cn(
        `w-full max-w-56 rounded-full py-1 text-center font-semibold`,
        {
          "bg-yellow20 text-yellow80":
            status === "WAITING_PAYMENT" || status === "WAITING",
          "bg-green-200 text-green-400":
            status === "SUCCESS_PAYMENT" || status === "APPROVED",
          "bg-red20 text-red80": status === "NOT_APPROVED",
        }
      )}
    >
      {statusText}
    </div>
  );
};

export default Status;
