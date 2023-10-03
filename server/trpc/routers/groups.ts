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
        .mutation(async ({ input, ctx }) => {
            const { name, year, activeFrom } = input;

            const createGroup = await prisma.group.create({
                data: {
                    name: name,
                    year: year,
                    activeFrom: activeFrom,
                },
            })
            if (!createGroup) {
                throw new TRPCError({
                    code: 'CONFLICT',
                    message: `There is no group created`,
                })
            }
            else {
                const addUserToGroup = await prisma.usersInGroups.create({
                    data: {
                        groupId: createGroup.id,
                        userId: ctx.user.id
                    }
                })
                return { createGroup }
            }
        }),
    list: teacherProcedure
    .query(async ({ ctx }) => {
        const resp = await prisma.group.findMany({
            where:{
                schoolId: ctx.user?.schoolId
            },
            orderBy: {
                name: 'asc'
            },
        })
        return resp
    }),
})

export type AppRouter = typeof groupsRouter;
