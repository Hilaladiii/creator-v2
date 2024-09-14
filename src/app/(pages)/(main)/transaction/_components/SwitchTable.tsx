"use client";

import { useState, useMemo } from "react";
import Pagination from "@/components/Pagination";
import Status from "@/components/ui/Status";
import { formatterCurrency } from "@/utils/formatterCurrency";
import { Company, Order, Proposal, Speaker } from "@prisma/client";
import ButtonOption from "./ButtonOption";
import Link from "next/link";

interface OrderWithSpeaker extends Order {
  speaker: Speaker;
}

interface ProposalWithCompany extends Proposal {
  company: Company;
}

interface SwitchTableProps {
  order: OrderWithSpeaker[];
  proposal: ProposalWithCompany[];
  totalOrder: number;
  totalProposal: number;
}

const SwitchTable = ({
  order,
  proposal,
  totalOrder,
  totalProposal,
}: SwitchTableProps) => {
  const [option, setOption] = useState<"speakers" | "sponsors">("speakers");

  const handleOptionChange = (value: "speakers" | "sponsors") => {
    setOption(value);
  };

  const tableContent = useMemo(() => {
    return option === "speakers" ? (
      <TableOrder data={order} totalOrder={totalOrder} />
    ) : (
      <TableProposal proposals={proposal} totalProposal={totalProposal} />
    );
  }, [option, order, proposal, totalOrder, totalProposal]);

  return (
    <div className="w-full flex flex-col">
      <ButtonOption option={option} onChange={handleOptionChange} />
      {tableContent}
    </div>
  );
};

interface TableProposalProps {
  proposals: ProposalWithCompany[];
  totalProposal: number;
}

const TableProposal = ({ proposals, totalProposal }: TableProposalProps) => {
  return (
    <div className="w-full max-w-6xl flex flex-col mx-auto">
      <table className="table-auto border-separate border-spacing-0 border border-blue10 rounded-md mt-10">
        <thead>
          <tr className="text-left">
            <th className="pl-4 py-3">Name</th>
            <th className="py-3">Subject</th>
            <th className="py-3">Proposal</th>
            <th className="py-3">Company</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {proposals.length > 0 ? (
            proposals.map((proposal, index) => (
              <tr className="text-left odd:bg-blue10" key={index}>
                <td className="pl-4 py-3">{proposal.name}</td>
                <td className="py-3">{proposal.subject}</td>
                <td className="py-3">
                  <Link
                    href={proposal.proposal}
                    className="underline text-blue50"
                  >
                    See Proposal
                  </Link>
                </td>
                <td className="py-3">{proposal.company.name}</td>
                <td className="py-3">
                  <Status status={proposal.status} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-3">
                No proposals available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination total={totalProposal} itemsPerPage={5} />
    </div>
  );
};

interface TableOrderProps {
  data: OrderWithSpeaker[];
  totalOrder: number;
}

const TableOrder = ({ data, totalOrder }: TableOrderProps) => {
  return (
    <div className="w-full flex flex-col">
      <table className="table-auto border-separate border-spacing-0 border border-blue10 rounded-md mt-10">
        <thead>
          <tr className="text-left">
            <th className="pl-4 py-3">ID Number</th>
            <th className="py-3">Transaction Date</th>
            <th className="py-3">Speaker&rsquo;s Name</th>
            <th className="py-3">Speaking To</th>
            <th className="py-3">Event Date</th>
            <th className="py-3">FEE</th>
            <th className="py-3">Status Booking</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((order, index) => (
              <tr className="text-left odd:bg-blue10" key={index}>
                <td className="pl-4 py-3">{order.orderCode}</td>
                <td className="py-3">
                  {new Date(order.bookDate).toDateString()}
                </td>
                <td className="py-3">{order.speaker.name}</td>
                <td className="py-3">{order.eventName}</td>
                <td className="py-3">
                  {new Date(order.eventDate).toDateString()}
                </td>
                <td className="py-3">{formatterCurrency(order.totalPrice)}</td>
                <td className="py-3">
                  <Status status={order.status} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-3">
                No orders available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination total={totalOrder} itemsPerPage={5} />
    </div>
  );
};

export default SwitchTable;
