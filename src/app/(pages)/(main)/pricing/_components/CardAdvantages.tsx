import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { LuCrown } from "react-icons/lu";

const CardAdvantages = () => {
  return (
    <div className=" bg-white rounded-lg shadow-card overflow-hidden">
      <table className="table-auto">
        <thead>
          <tr className="text-center font-semibold text-xs border-b-black border">
            <th></th>
            <th className="p-3 text-neutral60">Free</th>
            <th className="p-3 text-yellow50 flex items-start gap-1">
              <LuCrown />
              Premium
            </th>
          </tr>
        </thead>
        <tbody className="px-3">
          {[
            {
              feature: "Thousands of speakers and sponsors",
              free: true,
              premium: true,
            },
            {
              feature: "Unlimited apply proposals",
              free: false,
              premium: true,
            },
            {
              feature: "Transparency speaker's schedule",
              free: false,
              premium: true,
            },
            {
              feature: "Instant booking",
              free: false,
              premium: true,
            },
            {
              feature: "Filter by date",
              free: false,
              premium: true,
            },
          ].map((item, index) => (
            <tr key={index}>
              <td
                className={`px-8 py-4 ${
                  index === 0 ? "font-normal" : "font-semibold"
                }`}
              >
                {item.feature}
              </td>
              <td className="text-center">
                {item.free ? (
                  <span className="text-blue50 flex items-center justify-center">
                    <FaCheck />
                  </span>
                ) : (
                  <span className="text-neutral50 flex items-center justify-center">
                    <RxCross2 size={20} />
                  </span>
                )}
              </td>
              <td>
                {item.premium ? (
                  <span className="text-blue50 flex items-center justify-center">
                    <FaCheck />
                  </span>
                ) : (
                  <span className="text-neutral50 flex items-center justify-center font-semibold">
                    <RxCross2 />
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardAdvantages;
