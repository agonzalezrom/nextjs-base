import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {useSession} from "next-auth/client"

import Loading from "@/components/Loading"
import User from "@/types/User"

export const Auth = ({roles, redirects, children}) => {

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