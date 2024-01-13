import { z } from "zod";

export const queryValidatorSchema = z.object({
  category: z.string().optional(),
  sort: z.enum(["asc", "desc"]).optional(),
  limit: z.number().optional(),
})

export type TQueryValidator = z.infer<typeof queryValidatorSchema>;