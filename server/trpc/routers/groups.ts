import { z } from 'zod';
import { publicProcedure, router, teacherProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { hash, genSalt } from "bcrypt"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const groupsRouter = router({
    newGroup: teacherProcedure
        .input(z.object({
            name: z.string(),
            year: z.number().min(0).max(10),
            activeFrom: z.coerce.date()
        }))
        .mutation(async ({ input }) => {
            const { name, year, activeFrom } = input;

           const createGroup = await prisma.group.create({
                data: {
                    name: name,
                    year: year,
                    activeFrom: activeFrom,
                },
            })

            return { createGroup }

        })
})

export type AppRouter = typeof groupsRouter;
