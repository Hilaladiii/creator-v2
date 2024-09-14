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

export const speakerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "name is required"),
  description: z.string().min(1, "description is required"),
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
  price: z.number().nonnegative(),
  location: z.string().min(1, "location is required"),
  totalReview: z.number().nonnegative(),
  rating: z.number().nonnegative().optional(),
  portofolio: z
    .instanceof(File)
    .refine((file) => file.size <= 3 * 1024 * 1024, "Max file size is 3MB")
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Only Pdf & Docx files are accepted"
    ),
  category: z.nativeEnum(Category),
});

export type TSpeaker = z.infer<typeof speakerSchema>;
