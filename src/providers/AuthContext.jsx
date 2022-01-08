import {createContext, useState} from "react"
import {signOut, useSession} from "next-auth/react"
import {ModalsLogin} from "@modals/Login"
import {ModalsRegisterSimple} from "@modals/RegisterSimple"
import {ModalsRememberPassword} from "@modals/RememberPassword"

export const AuthContext = createContext(undefined)

export const AuthProvider = ({children}) => {

    const { data: session, status} = useSession()
    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)
    const [recover, setRecover] = useState(false)

    const openModal = modal => {
        modal === "login" ? setLogin(true) : setRegister(true)
    }

    const switchLoginRegister = () => {
        setLogin(!login)
        setRegister(!register)
    }

    const resetPassword = () => {
        setLogin(false)
        setRegister(false)
        setRecover(true)
    }

    const closeRecover = () => {
        setRecover(false)
    }

    const closeSession = () => {
        if(session) {
            signOut({ redirect: false}).then(()=>{
                window.location.href = "/"
            })
        }
    }

    return (
        <AuthContext.Provider value={{session, status, openModal, closeSession}}>
            {children}
            <ModalsLogin show={login} onClose={() => setLogin(false)} switchModals={switchLoginRegister} recoverPassword={resetPassword}/>
            <ModalsRegisterSimple show={register} onClose={()=>setRegister(false)} switchModals={switchLoginRegister} />
            <ModalsRememberPassword show={recover} onClose={closeRecover} />
        </AuthContext.Provider>
    )
}