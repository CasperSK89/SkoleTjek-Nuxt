import { z } from 'zod';
import { publicProcedure, router, teacherProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { hash, genSalt } from "bcrypt"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export const userRouter = router({
    list: teacherProcedure
        .query(async ({ ctx }) => {
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
        .mutation(async ({ input }) => {
            const { name, email, password } = input;

            const userExists = await prisma.users.count({
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
            // Generate a salt
            const saltRounds = 12; // You can adjust the number of rounds as needed
            const salt = await genSalt(saltRounds);

            // Hash the password using the generated salt
            const hashedPassword = await hash(password, salt);

            await prisma.users.create({
                data: {
                    email: email,
                    name: name,
                    password: hashedPassword,
                },
            })

            return { message: "User created" }

        })


});

// export type definition of API
export type AppRouter = typeof userRouter;