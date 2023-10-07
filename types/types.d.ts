import type { AppRouter } from '../server/trpc/routers'
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
      role: UserRole;
      schoolId: string
    };
    expires: string;
  };

  enum UserRole {
    SuperAdmin = 1,
    SchoolAdmin = 2,
    Teacher = 3,
    Student = 4,
  }

  type PageMeta = {
    role: number;
    // Other meta properties if any
  };

  // Outputs
  type User = RouterOutput['usersRouter']['byName']
  type StudentList = RouterOutput['usersRouter']['studentList']
  type GroupsByUser = RouterOutput['usersInGroupsRouter']['groupsByUser']
  type Groups = RouterOutput['groupsRouter']['list']
  type UsersInGroup = RouterOutput['usersInGroupsRouter']['usersInGroup']
  // Inputs
  type RegisterUser = RouterInput['usersRouter']['register']
  type createGroup = RouterInput['groupsRouter']['newGroup']

}

export { User as UserByName, UsersList, GroupsByUser, Groups, RegisterUser, createGroup}