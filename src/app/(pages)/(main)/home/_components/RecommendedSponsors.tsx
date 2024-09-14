import Card from "@/components/Card";
import { getCompaniesService } from "@/services/company";

const RecommendedSponsors = async () => {
  const companies = await getCompaniesService();
  return (
    <div className="mt-16">
      <h2 className="text-xl font-medium">Recommended Sponsors</h2>
      <div className="flex flex-row gap-8 mt-8">
        {companies.length >= 0 &&
          companies.map((company, index) => (
            <Card
              key={index}
              type="sponsor"
              id={company.id}
              name={company.name}
              image={company.photo}
              category={company.category}
              location={company.location}
              accepted={company.accepted}
              totalReview={company.totalReview || 0}
              rating={company.rating!}
            />
          ))}
      </div>
    </div>
  );
};

export default RecommendedSponsors;
