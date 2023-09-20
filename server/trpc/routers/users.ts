import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { PrismaClient } from '@prisma/client'
import { TRPCError } from '@trpc/server';


const prisma = new PrismaClient()

export const userRouter = router({
    list: publicProcedure
        .query(async ({ ctx, }) => {
            const resp = await prisma.user.findMany({
                orderBy: {
                    name: 'asc'
                },
            })
            return resp
        }),
    byName: publicProcedure
        .input(z.object({ name: z.string() }))
        .query(async ({ input, ctx }) => {
            const { name } = input;
            const resp = await ctx.prisma.user.findFirst({ where: { name: name } })
            console.log(resp);
            if (!resp) {

                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No user with name: '${name}'`,
                })

            }
            return resp
        }),
    post: publicProcedure
        .input(z.object({
            name: z.string(),
            email: z.string(),
        }))
        .query(async ({ input, ctx }) => {
            const { name } = input;
            const resp = await ctx.prisma.user.findFirst({ where: { name: name } })
            console.log(resp);
            if (!resp) {

                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No user with name: '${name}'`,
                })

            }
            return resp
        })


});

// export type definition of API
export type AppRouter = typeof userRouter;