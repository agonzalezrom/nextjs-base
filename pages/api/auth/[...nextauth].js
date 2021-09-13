import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const post = {
          email: credentials.email,
          password: credentials.password
        }
        const res = await fetch(process.env.NEXT_PUBLIC_SITE_BE + "/api/users/login", {
          method: 'POST',
          body: JSON.stringify(post),
          headers: {"Accept": "application/json", "Content-Type": "application/json" }
        })
        const data = await res.json()
        if (typeof data.token !== "undefined" && typeof data.token === "string") {
          return data
        }
        return null
      }
    }),
  ],

  secret: process.env.SECRET,

  session: {
    jwt: true,
  },

  jwt: {},

  pages: {},

  callbacks: {
    async session(session, jwt) {
      session.user = jwt.user
      session.accessToken = jwt.token
      return session
    },
    async jwt(jwt, user) {
      if(user?.user && user?.token)
      {
        jwt.user = user?.user
        jwt.token = user?.token
      }
      return jwt
    }
  },

  events: {},

  theme: 'auto',

  debug: false,
})
