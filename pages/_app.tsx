import { SessionProvider } from "next-auth/react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { appWithTranslation } from "next-i18next"

import { AuthProvider } from "@providers/AuthContext"
import { AlertProvider } from "@providers/AlertContext"
import { Auth } from "@components/Auth"

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@assets/styles/theme.css"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK)

export const Application = ({Component, pageProps}) => {
    return (
        <SessionProvider session={pageProps.session}>
            <AlertProvider>
                <AuthProvider>
                    <Elements stripe={stripePromise}>
                            {Component.auth ? (
                                <Auth roles={Component.auth.roles} redirects={Component.auth.redirects}>
                                    <Component {...pageProps} />
                                </Auth>
                            ) : (
                                <Component {...pageProps} />
                            )}
                    </Elements>
                </AuthProvider>
            </AlertProvider>
        </SessionProvider>
    )
}

export default appWithTranslation(Application)
