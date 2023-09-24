import { inferAsyncReturnType } from '@trpc/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from '#auth'; // Import the getServerSession function

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */

interface User {
  id: string;
  name: string;
  email: string;
  role: number;
  // Add any other properties specific to your user object here
}

export const createContext = async (event: any) => {
  const prisma = new PrismaClient();
  const session = await getServerSession(event);

  if (session) {
    const { user } = session;

    return { prisma, user: user as User }; // Explicitly specify the type as User
  }

  return { prisma, user: null as null }; // Provide an initializer for 'user' or set it to null
};

export type Context = inferAsyncReturnType<typeof createContext>;
