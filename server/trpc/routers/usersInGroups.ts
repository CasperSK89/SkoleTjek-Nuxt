import { z } from 'zod';
import { publicProcedure, router, teacherProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { hash, genSalt } from "bcrypt"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const usersInGroups = router({
    addUser: teacherProcedure
        .input(z.object({
            userId: z.string(),
            groupId: z.string()
        }))
        .mutation(async ({ input }) => {
            const { userId, groupId } = input;

            const resp = await prisma.usersInGroups.create({
                data: {
                    userId: userId,
                    groupId: groupId,
                },
            })
            return { message: "User added" }
        }),
    addUsers: teacherProcedure
        .input(z.object({
            userId: z.string(),
            groupId: z.string()
        }))
        .mutation(async ({ input }) => {
            const { userId, groupId } = input;

            const addUsers = await prisma.usersInGroups.updateMany({
                data: {
                    userId: userId,
                    groupId: groupId,
                },
            })
            return { message: "User added" }
        }),
    groupsByUser: teacherProcedure
    .query(async ({ ctx }) => {
        const resp = await prisma.usersInGroups.findMany({
            where: {
               userId : ctx.user.id
            },
            include:{
                group: true
            },
            orderBy:{
                group:{
                    name: 'asc'
                }
            }
        })
        return resp
    }),
    
    
})

export type AppRouter = typeof usersInGroups;
