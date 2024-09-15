import { Suspense } from "react";
import Poster from "@/components/Poster";
import FilterCategory from "@/components/FilterCategory";
import FilterLocation from "@/components/FilterLocation";
import ListSponsors from "./_components/ListSponsors";
import ListSkeleton from "@/components/ListSkeleton";

const SponsorsPage = () => {
  return (
    <div>
      <Poster
        title="Make it Great with CreatOr"
        description="Find sponsors for your next event"
      />
      <div className="px-44">
        <FilterCategory />
        <div className="flex flex-row w-full justify-between gap-16">
          <FilterLocation />
          <Suspense
            fallback={
              <div className="w-full mt-10 flex flex-row justify-between">
                <ListSkeleton />
              </div>
            }
          >
            <ListSponsors />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
