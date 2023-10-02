import { router } from "../trpc";
import { usersRouter } from "./users";
import { groupsRouter } from "./groups";

export const appRouter = router({
  usersRouter, groupsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;