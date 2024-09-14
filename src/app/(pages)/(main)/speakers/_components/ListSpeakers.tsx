import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { getTotalSpeakers } from "@/db/speaker";
import { getSpeakerPaginationService } from "@/services/speaker";

const ListSpeakers = async ({ currentPage }: { currentPage: number }) => {
  const speakers = await getSpeakerPaginationService(currentPage);
  const totalSpeakers = await getTotalSpeakers();
  return (
    <div className="w-full flex flex-col">
      <div className="grid grid-cols-3 2xl:grid-cols-4 items-start justify-start mt-8 gap-8">
        {speakers.length >= 0 &&
          speakers.map((speaker, index) => (
            <Card
              type="speaker"
              id={speaker.id}
              key={index}
              name={speaker.name}
              image={speaker.photo}
              category={speaker.category}
              location={speaker.location}
              rating={speaker.rating || 0}
              price={speaker.price}
              totalReview={speaker.totalReview || 0}
            />
          ))}
      </div>
      <Pagination total={totalSpeakers}></Pagination>
    </div>
  );
};

export default ListSpeakers;
