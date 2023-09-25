import type { AppRouter } from '@/server/trpc/routers'
import { TRPCClientError } from '@trpc/client'
import type { inferRouterOutputs, inferRouterInputs } from '@trpc/server'

type RouterOutput = inferRouterOutputs<AppRouter>
type RouterInput = inferRouterInputs<AppRouter>
type ErrorOutput = TRPCClientError<AppRouter>

declare global {

    type UserSession = {
        user: {
          name: string;
          email: string;
          id: string;
          role: number;
        };
        expires: string;
      };

    type PageMeta = {
        role: number;
        // Other meta properties if any
      };

    // Outputs
    type UserByName = RouterOutput['userRouter']['byName']
    type UsersList = RouterOutput['userRouter']['list']

    // Inputs
    type RegisterUser = RouterInput['userRouter']['register']

}