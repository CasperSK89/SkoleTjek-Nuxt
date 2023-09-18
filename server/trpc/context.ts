import { inferAsyncReturnType } from '@trpc/server'
import { db } from "../sqlite-service";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = () => {

    return {db}
}

export type Context = inferAsyncReturnType<typeof createContext>