import Poster from "@/components/Poster";
import FilterCategory from "@/components/FilterCategory";
import FilterLocation from "@/components/FilterLocation";
import ListSpeakers from "./_components/ListSpeakers";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";

const SpeakersPage = ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const currPage = Number(searchParams?.page) || 1;
  return (
    <div>
      <Poster
        title="Make it Great with CreatOr"
        description="Find speakers for your next event"
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
            <ListSpeakers currentPage={currPage} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;
