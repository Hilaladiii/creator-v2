import { z } from "zod";

enum Category {
  TECHNOLOGY = "TECHNOLOGY",
  HEALTH = "HEALTH",
  ECONOMICS = "ECONOMICS",
  PSYCHOLOGY = "PSYCHOLOGY",
  EDUCATION = "EDUCATION",
  ENVIRONMENT = "ENVIRONMENT",
  POLITICS = "POLITICS",
}

export const companySchema = z.object({
  name: z.string().min(1, "Company name is required"),
  email: z.string().email(),
  description: z.string().min(1, "Company description is required"),
  photo: z
    .instanceof(File)
    .refine((file) => file.size <= 2 * 1024 * 1024, "Max file size is 2MB")
    .refine(
      (file) =>
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          file.type
        ),
      "Only jpeg, jpg, png and webp files are accepted"
    ),
  location: z.string().min(1, "Company location is required"),
  accepted: z.number().nonnegative(),
  website: z.string().min(1, "Company website is required"),
  phone: z.string().min(1, "Company phone is required"),
  profile: z.string().min(1, "Company profile is required"),
  rating: z.number().nonnegative(),
  totalReview: z.number().nonnegative(),
  category: z.nativeEnum(Category),
});

export type TCompany = z.infer<typeof companySchema>;
