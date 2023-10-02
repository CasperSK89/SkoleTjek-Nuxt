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

  // Check if the user is logged in
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  // Check if the user's role is greater than or equal to 2
  if (ctx.user.role < 2) {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Insufficient role permissions' });
  }

  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const teacherProcedure = publicProcedure.use(isAuthorized);
