import { getRecommendedSpeakers } from "@/actions/getRecommendedSpeaker";
import Card from "@/components/Card";

const RecommendedSpeakers = async () => {
  const speakers = await getRecommendedSpeakers();
  return (
    <div className="mt-16">
      <h2 className="text-xl font-medium">Recommended Speakers</h2>
      <div className="flex flex-row justify-between gap-8 mt-8">
        {speakers.map((speaker, index) => (
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
    </div>
  );
};

export default RecommendedSpeakers;
