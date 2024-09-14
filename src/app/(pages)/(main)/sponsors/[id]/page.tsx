import CardDetail from "@/components/CardDetail";
import Reviews from "@/components/Reviews";
import { getCompaniesService, getCompanyByIdService } from "@/services/company";

export async function generateStaticParams() {
  const companies = await getCompaniesService();
  return companies.map((company) => ({ id: company.id }));
}

const DetailSponsor = async ({ params }: { params: { id: string } }) => {
  const company = await getCompanyByIdService(params.id);
  return (
    <div>
      <div className="w-full h-[50vh] bg-yellow50"></div>
      <div className="w-full px-44 -mt-80 flex flex-col justify-center items-center">
        <CardDetail
          id={params.id}
          image={company?.photo!}
          category={company?.category!}
          description={company?.description!}
          name={company?.name}
          link="www.apples.com"
          accepted={company?.accepted || 0}
          rating={company?.rating?.toString()}
          location={company?.location}
          type="sponsors"
          profile={company?.profile}
        />

        <Reviews rating="5/5 (5)"></Reviews>
      </div>
    </div>
  );
};

export default DetailSponsor;
