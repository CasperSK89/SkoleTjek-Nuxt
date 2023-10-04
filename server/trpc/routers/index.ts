import { router } from "../trpc";
import { usersRouter } from "./users";
import { groupsRouter } from "./groups";
import { usersInGroupsRouter } from "./usersInGroups";

export const appRouter = router({
  usersRouter, groupsRouter, usersInGroupsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;