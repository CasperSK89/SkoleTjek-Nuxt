import { z } from 'zod';
import { publicProcedure, router, teacherProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { hash, genSalt } from "bcrypt"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const userRouter = router({
    newGroup: teacherProcedure
        .input(z.object({
            name: z.string(),
            year: z.number(),
            activeFrom: z.date(),
        }))
        .mutation(async ({ input }) => {
            const { name, year, activeFrom } = input;

            await prisma.groups.create({
                data: {
                    name: name,
                    year: year,
                    activeFrom: activeFrom,
                },
            })

            return { message: "Group  created" }

        })

})
