import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {useSession} from "next-auth/react"

import { Loading } from "@components/Loading"

export const Auth = ({roles, redirects, children}) => {

    const {data: session, status} = useSession()
    const [validChildren, setValidChildren] = useState(false)
    const router = useRouter()
    const validUser = !!session

    useEffect(() => {
        if (status === "loading") return
        if (validUser) {

            const user = session

            if(redirects.success !== null)
            {
                router.push(redirects.success)
                return
            }

            setValidChildren(true)
        }

        if(redirects.error === null)
        {
            setValidChildren(true)
        }

    }, [validUser, session, status, router, redirects])

    if (validChildren)
    {
        return children
    }

    return <Loading/>
}