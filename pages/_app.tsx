import {Provider as SessionProvider } from "next-auth/client"
import {AlertProvider} from "@/providers/AlertContext"
import {Auth} from "@/components/Auth"

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@/assets/styles/theme.css"

export const Application = ({Component, pageProps}) => {
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
}

export default Application
