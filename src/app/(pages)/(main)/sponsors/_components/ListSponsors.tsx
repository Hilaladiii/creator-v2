import Card from "@/components/Card";
import { getCompaniesService } from "@/services/company";

const ListSponsors = async () => {
  const sponsors = await getCompaniesService();
  return (
    <div className="grid grid-cols-3 2xl:grid-cols-4 justify-between mt-8 gap-8">
      {sponsors.length >= 0 &&
        sponsors.map((sponsor, index) => (
          <Card
            type="sponsor"
            id={sponsor.id}
            category={sponsor.category}
            image={sponsor.photo}
            accepted={sponsor.accepted || 0}
            location={sponsor.location}
            rating={sponsor.rating || 0}
            totalReview={sponsor.totalReview || 0}
            name={sponsor.name}
            key={index}
          />
        ))}
    </div>
  );
};

export default ListSponsors;
