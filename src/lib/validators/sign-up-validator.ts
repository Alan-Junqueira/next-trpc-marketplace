import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type TSignUpInputs = z.input<typeof signUpSchema>;
