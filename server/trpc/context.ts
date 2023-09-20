import { inferAsyncReturnType } from '@trpc/server'
import { PrismaClient } from '@prisma/client'
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = () => {

    const prisma = new PrismaClient()

    return {prisma}
}

export type Context = inferAsyncReturnType<typeof createContext>