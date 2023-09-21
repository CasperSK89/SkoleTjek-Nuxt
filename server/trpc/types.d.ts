import type { AppRouter } from '@/server/trpc/routers'
import type { inferRouterOutputs } from '@trpc/server'

type RouterOutput = inferRouterOutputs<AppRouter>

declare global {
    type UserByName = RouterOutput['userRouter']['byName']

}