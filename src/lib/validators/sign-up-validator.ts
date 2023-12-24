import { z } from "zod";

export const authSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type TAuthInputs = z.input<typeof authSchema>;
