import { router } from "../trpc";
import { usersRouter } from "./users";
import { groupsRouter } from "./groups";
import { usersInGroups } from "./usersInGroups";

export const appRouter = router({
  usersRouter, groupsRouter, usersInGroups
});

// export type definition of API
export type AppRouter = typeof appRouter;