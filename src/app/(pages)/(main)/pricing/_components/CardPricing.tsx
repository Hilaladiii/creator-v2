import Button from "@/components/ui/Button";
import { formatterCurrency } from "@/utils/formatterCurrency";

interface CardPricingProps {
  month: string;
  bestValue?: boolean;
  price: number;
  priceYear: number;
}

const CardPricing = ({
  month,
  bestValue,
  price,
  priceYear,
}: CardPricingProps) => {
  return (
    <div className="h-fit flex flex-col bg-white rounded-lg shadow-card p-5">
      {bestValue && (
        <div className="w-fit text-blue50 bg-blue10 rounded-md px-3 py-1 text-xs">
          Best value
        </div>
      )}
      <div className="flex flex-row items-end gap-20">
        <div className="flex flex-col">
          <span className="font-semibold text-base mt-3">{month} MONTHS</span>
          <span className="font-bold text-lg">
            {formatterCurrency(price)}
            <span className="text-sm font-normal">/month</span>
          </span>
          <span className="font-bold text-base">
            {formatterCurrency(priceYear)}{" "}
            <span className="font-normal text-sm">every</span> 12{" "}
            <span className="font-normal text-sm">months</span>
          </span>
        </div>
        <div>
          <Button label="Subscribe Now" size="normal" />
        </div>
      </div>
    </div>
  );
};

export default CardPricing;
