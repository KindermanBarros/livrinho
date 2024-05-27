import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const googleApiKey = process.env.GOOGLE_API_KEY;
const t = initTRPC.create(); 

export const appRouter = t.router({
  apiKeyQuery: t.procedure
    .query(() => {
      return googleApiKey;
    }),
  createGreeting: t.procedure
    .input(z.object({ greeting: z.string() }))
    .mutation(({ input }) => {
      return `Created ${input.greeting}: ${googleApiKey}`;
    }),
});

export type AppRouter = typeof appRouter;