import CardDetail from "@/components/CardDetail";
import Reviews from "@/components/Reviews";
import { getSpeakerByIdService, getSpeakersService } from "@/services/speaker";

export async function generateStaticParams() {
  const speakers = await getSpeakersService();
  return speakers.map((speaker) => ({ id: speaker.id }));
}

const DetailSpeaker = async ({ params }: { params: { id: string } }) => {
  const speaker = await getSpeakerByIdService(params.id);
  return (
    <div>
      <div className="w-full h-[50vh] bg-yellow50"></div>
      <div className="w-full px-44 -mt-80 flex flex-col justify-center items-center">
        <CardDetail
          id={speaker?.id!}
          image={speaker?.photo!}
          category={speaker?.category!}
          name={speaker?.name!}
          pricing={speaker?.price}
          rating={speaker?.rating?.toString()}
          location={speaker?.location}
          portofolio={speaker?.portofolio}
          description={speaker?.description}
          type="speakers"
        />

        <Reviews rating="5/5 (5)"></Reviews>
      </div>
    </div>
  );
};

export default DetailSpeaker;
