import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {parseJwt} from "../../../src/functions"

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const post = {
          email: credentials.email,
          password: credentials.password
        }
        const res = await fetch(process.env.NEXT_PUBLIC_SITE_BE + "/api/users/login", {
          method: 'POST',
          body: JSON.stringify(post),
          headers: {"Content-Type": "application/json" }
        })
        const user = await res.json()
        if (user) {
          return user
        }
        return null
      }
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session = token
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if(user?.jwt)
      {
        const parsedJwt = parseJwt(user?.jwt)
        token.jwt = user?.jwt
        token.id = parsedJwt.id
        token.authorities = parsedJwt.authorities
        token.lastname = parsedJwt.lastname
        token.phone = parsedJwt.phone
      }
      return token
    }
  },

  secret: process.env.SECRET,

  session: {
    jwt: true,
  },

  theme: 'auto',

  debug: false,
})
