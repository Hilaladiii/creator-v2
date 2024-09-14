import { storage } from "@/libs/firebase";
import prisma from "@/libs/prisma";
import { uploaderGetUrl } from "@/utils/uploader";
import { companySchema, TCompany } from "@/validation/company";
import { ref } from "firebase/storage";

export async function createCompany(data: TCompany) {
  try {
    const validation = companySchema.safeParse(data);
    if (validation.success) {
      const photoRef = ref(storage, `company-photos/${data.photo.name}`);
      const photo = await uploaderGetUrl(photoRef, data.photo);

      const res = await prisma.company.create({
        data: {
          name: data.name,
          email: data.email,
          photo: photo,
          location: data.location,
          accepted: data.accepted,
          description: data.description,
          category: data.category,
          phone: data.phone,
          profile: data.profile,
          website: data.website,
          rating: data.rating,
          totalReview: data.totalReview,
        },
      });

      return {
        status: 201,
        message: "Success add your company",
        data: res,
      };
    }
    return {
      status: 400,
      message: "Invalid payload",
      error: validation.error.issues.map((issue) => issue.message),
    };
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
}

export async function getCompanies() {
  try {
    const companies = await prisma.company.findMany({
      select: {
        accepted: true,
        id: true,
        rating: true,
        totalReview: true,
        photo: true,
        name: true,
        location: true,
        category: true,
      },
    });

    if (!companies)
      return {
        status: 404,
        message: "Company not found!",
        data: [],
      };

    return {
      status: 200,
      message: "Success get companies",
      data: companies,
    };
  } catch (error) {
    return {
      status: 500,
      message: error,
      data: [],
    };
  }
}

export async function getCompanyById(id: string) {
  try {
    const company = await prisma.company.findUnique({
      where: {
        id,
      },
    });

    if (!company)
      return {
        status: 404,
        message: "company not found!",
        data: null,
      };

    return {
      status: 200,
      message: "Success get company by id",
      data: company,
    };
  } catch (error) {
    return {
      status: 500,
      message: error,
      data: null,
    };
  }
}
