import { signUpSchema } from "@/lib/validators/sign-up-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "@/get-payload";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(signUpSchema)
    .mutation(async({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient()

      
    }),
});
