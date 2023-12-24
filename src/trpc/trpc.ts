import { TExpressContext } from "@/server";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<TExpressContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
