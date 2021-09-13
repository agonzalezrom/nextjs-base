import {useEffect, useState} from "react"
import {useRouter} from 'next/router'
import {Provider as SessionProvider, useSession} from "next-auth/client"

import {AlertProvider} from "@/providers/AlertContext"
import Loading from "@/components/Loading"

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/theme.css"
import User from "@/types/User";

export const App = ({Component, pageProps}) => {

  return (
      <SessionProvider options={{clientMaxAge: 0, keepAlive: 0}} session={pageProps.session}>
        <AlertProvider>
          {Component.auth ? (
              <Auth roles={Component.auth.roles} redirects={Component.auth.redirects}>
                <Component {...pageProps} />
              </Auth>
          ) : (
              <Component {...pageProps} />
          )}
        </AlertProvider>
      </SessionProvider>
  )

  function Auth({roles, redirects, children}) {
    const [session, loading] = useSession()
    const [validChildren, setValidChildren] = useState(false)
    const router = useRouter()
    const validUser = !!session?.user
    useEffect(() => {
      if (loading) return
      if (validUser) {
        // @ts-ignore
        const user:User = session?.user

        if(redirects.success !== null)
        {
          router.push(redirects.success)
          return
        }
        if (roles.length > 0 && roles.includes(user.role)) {
          setValidChildren(true)
        } else {
          router.push(redirects.error)
        }
      }else{
        if (roles.length > 0) {
          router.push(redirects.error)
        }else{
          setValidChildren(true)
        }
      }
    }, [validUser, session, loading])

    if (validChildren)
    {
      return children
    }

    return <div className="d-flex justify-content-center align-content-center vh-100">
      <div className="my-auto"><Loading/></div>
    </div>
  }
}

export default App;
