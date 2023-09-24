import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { compare } from "bcrypt"
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()



export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/login',
    error: '/auth/login',
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({

      async authorize(credentials: { username: string, password: string }) {

        const user = await prisma.users.findUnique({
          where: { name: credentials?.username },

        }
        )
        if (!user) {
          throw createError({
            statusCode: 403,
            statusMessage: "Ingen bruger",
          })

        }

        const isPasswordValid = await compare(credentials?.password, user.password)

        if (!isPasswordValid) {
          throw createError({
            statusCode: 403,
            statusMessage: "Kode virker ikke",
          })

        }
        return user
      }
    })
  ],
  callbacks: {
    // Specify here the payload of your token and session
    async jwt({ token, user }: { token: any, user: any }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.role = user.role
      }
      return Promise.resolve(token);
    },
    async session({ session, token }: { session: any, token: any }) {
      session.user.id = token.id
      session.user.name = token.name
      session.user.email = token.email
      session.user.role = token.role
      return Promise.resolve(session);
    },
  },
})