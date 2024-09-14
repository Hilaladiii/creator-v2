import { z } from "zod";

export const proposalSchema = z.object({
  name: z.string().min(1, "Proposal nama is required"),
  email: z.string().email(),
  phoneNumber: z.string().min(12, "invalid phone number"),
  subject: z.string().min(1, "Proposal subject is required"),
  proposal: z
    .instanceof(File)
    .refine((file) => file.size <= 2 * 1024 * 1024, "Max file size is 2MB")
    .refine((file) =>
      [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ),
  companyId: z.string().optional(),
  userId: z.string().optional(),
});

export type TProposal = z.infer<typeof proposalSchema>;
