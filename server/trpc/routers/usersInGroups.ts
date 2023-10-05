import { z } from 'zod';
import { publicProcedure, router, teacherProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { hash, genSalt } from "bcrypt"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const usersInGroupsRouter = router({
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
        .input(z.array(z.object({
            groupId: z.string(),
            userId: z.string()
        })))
        .mutation(async ({ input }) => {

            input.forEach(async (x) => {

                const resp = await prisma.usersInGroups.create({
                    data: {
                        userId: x.userId,
                        groupId: x.groupId
                    }
                })
                return resp
            });
        }),
    removeUser: teacherProcedure
        .input(z.object({
            userId: z.string(),
            groupId: z.string()
        }))
        .mutation(async ({ input }) => {
            const { userId, groupId } = input;

            const resp = await prisma.usersInGroups.delete({
                where:{
                    userId_groupId: {
                        groupId: groupId,
                        userId: userId
                } }
            })
            return { message: "User deleted" }
        }),
    groupsByUser: teacherProcedure
        .query(async ({ ctx }) => {
            const resp = await prisma.usersInGroups.findMany({
                where: {
                    userId: ctx.user.id
                },
                include: {
                    group: true
                },
                orderBy: {
                    group: {
                        name: 'asc'
                    }
                }
            })
            return resp
        }),
    usersInGroup: teacherProcedure
        .input(z.object({ groupId: z.string() }))
        .query(async ({ input }) => {

            const { groupId } = input;

            const resp = await prisma.user.findMany({
                where: {
                    groups: {
                        some: {
                            groupId: groupId
                        }
                    }
                }
            })
            return resp
        })



})

export type AppRouter = typeof usersInGroupsRouter;
