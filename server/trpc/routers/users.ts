import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { users } from "@/db/schemas/schema";
import { eq, lt, gte, ne } from "drizzle-orm";

import { db } from "@/server/sqlite-service";

export const userRouter = router({
    getUsers: publicProcedure
        .query(async ({ ctx }) => {
            // Retrieve users from a datasource, this is an imaginary database
            const resp = await ctx.db.select().from(users).all()
            return resp;
        }),
    getSingleUser: publicProcedure
        .input(z.object({ id: z.number() }))
        .query(async ({ input, ctx }) => {
            const resp = await ctx.db.select().from(users).where(eq(users.id, input.id))

            return resp
        })

});

// export type definition of API
export type AppRouter = typeof userRouter;