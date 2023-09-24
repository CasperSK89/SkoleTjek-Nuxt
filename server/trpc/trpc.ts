/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @see https://trpc.io/docs/v10/router
 * @see https://trpc.io/docs/v10/procedures
 */
import { initTRPC, TRPCError } from '@trpc/server'
import { Context } from '../trpc/context'

const t = initTRPC.context<Context>().create()

/**
 * Unprotected procedure
 **/
export const router = t.router
export const middleware = t.middleware
export const publicProcedure = t.procedure

const isAuthorized = middleware(async (opts) => {
    const { ctx } = opts;
    if (!ctx.user?.role ) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return opts.next({
      ctx: {
        user: ctx.user,
      },
    });
  });
   
  export const adminProcedure = publicProcedure.use(isAuthorized);