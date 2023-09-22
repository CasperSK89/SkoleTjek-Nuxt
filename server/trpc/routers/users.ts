import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { TRPCError } from '@trpc/server';
import { hash } from "bcrypt"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const userRouter = router({
    list: publicProcedure
        .query(async ({ ctx, }) => {
            const resp = await prisma.users.findMany({
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
            const resp = await ctx.prisma.users.findFirst({ where: { name: name } })
            console.log(resp);
            if (!resp) {

                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `No user with name: '${name}'`,
                })

            }
            return resp
        }),
    register: publicProcedure
        .input(z.object({
            name: z.string().min(6),
            email: z.string().email(),
            password: z.string().min(6),
        }))
        .mutation(async ({ input, ctx }) => {
            const { name, email, password } = input;

            console.log(input);

            const userExists = await prisma.users.findFirst({
                where: {
                    OR: [
                        { email: email },
                        { name: name }
                    ]
                }
            })

            if (userExists) {
                throw new TRPCError({
                    code: 'CONFLICT',
                    message: `There is already a user with that username or email`,
                })
            }

            await prisma.users.create({
                data: {
                    email: email,
                    name: name,
                    password: await hash(password, 12)
                },
            })

            return { message: "User created" }

        })


});

// export type definition of API
export type AppRouter = typeof userRouter;