import { getOrderService } from "@/services/order";
import { Order, Speaker } from "@prisma/client";
import { getOrderPages } from "@/db/order";
import getCurrentUser from "@/actions/getCurrentUser";
import { getProposalService } from "@/services/proposal";
import { getProposalPages } from "@/db/proposal";
import SwitchTable from "./SwitchTable";
import { Suspense } from "react";

interface OrderWithSpeaker extends Order {
  speaker: Speaker;
}

const TransactionTable = async () => {
  const orders: OrderWithSpeaker[] = await getOrderService();
  const proposals = await getProposalService();
  const user = await getCurrentUser();
  const totalOrder = await getOrderPages(user?.id!);
  const totalProposal = await getProposalPages(user?.id!);

  return (
    <div className="w-full px-20">
      <div className="mx-auto flex flex-col p-6 bg-white rounded-md -mt-[20%] shadow-card">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-semibold">My Transaction</h1>
          <input
            type="text"
            placeholder="Search for speakers"
            className="outline-none ring-1 ring-blue10 rounded-md px-3"
          />
        </div>
        <Suspense fallback={<p>loading...</p>}>
          <SwitchTable
            order={orders}
            totalOrder={totalOrder}
            totalProposal={totalProposal}
            proposal={proposals}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default TransactionTable;
