import { z } from "zod";

enum PaymentMethod {
  BCA = "BCA",
  BRI = "BRI",
  GOPAY = "GOPAY",
}

export const orderSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  description: z.string().min(1, "Event description is required"),
  date: z.date(),
  time: z.string(),
  duration: z.coerce.number().nonnegative(),
  rundown: z
    .instanceof(File)
    .refine((file) => file.size <= 2 * 1024 * 1024, "Max file size is 2MB")
    .refine((file) =>
      [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ),
  script: z
    .instanceof(File)
    .or(z.literal(null))
    .optional()
    .refine(
      (file) => !file || file.size <= 3 * 1024 * 1024,
      "Max file size is 3MB"
    )
    .refine(
      (file) =>
        !file ||
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file.type),
      "Only Pdf & Docx files are accepted"
    ),
  paymentType: z.nativeEnum(PaymentMethod, {
    message: "Payment method is required",
  }),
});

export type TOrder = z.infer<typeof orderSchema>;
