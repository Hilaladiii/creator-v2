import { BackgroundImage } from "@/components/BackgroundCommon";
import CardAdvantages from "./_components/CardAdvantages";
import CardPricing from "./_components/CardPricing";

const PricingPage = () => {
  return (
    <div className="flex flex-col">
      <BackgroundImage />
      <div className="mx-auto -mt-[20%]">
        <h1 className="font-semibold text-4xl">
          Go with <br /> Creator Premium now
        </h1>
        <div className="flex flex-row px-20 pt-10 gap-16">
          <CardAdvantages />
          <div className="flex flex-col gap-8">
            <CardPricing
              month="12"
              price={30000}
              priceYear={360000}
              bestValue
            />
            <CardPricing month="1" price={40000} priceYear={480000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
