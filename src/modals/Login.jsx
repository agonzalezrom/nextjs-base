import React, {useContext, useState} from "react"
import {signIn } from "next-auth/react"
import {useTranslation} from "next-i18next"

import { Loading } from "@components/Loading"
import {Modal} from "@components/Modal"
import {InputIcon} from "@components/Form/InputIcon"
import {InputPassword} from "@components/Form/InputPassword"
import {AlertContext} from "@providers/AlertContext"

import IconPassword from "@assets/svg/modal-register/icon-password.svg"
import IconEmail from "@assets/svg/modal-register/icon-email.svg"

export const ModalsLogin = ({show, onClose, switchModals, recoverPassword}) => {

    const { t } = useTranslation("common")
    const {errorAlert} = useContext(AlertContext)
    const [loading, setLoading] = useState(false)
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const error = () => {
        errorAlert("Error", "The fields entered are invalid, please try again.", () => {
            setCredentials({
                email: "",
                password: ""
            })
            setLoading(false)
        })
    }

    const handleLogin = () => {

        if (credentials.email === "" || credentials.password === "") {
            error()
        }

        setLoading(true)

        const config = {
            redirect: false,
            email: credentials.email,
            password: credentials.password
        }

        signIn('credentials', config).then((e) => {
            e.ok ? window.location.reload() : error()
        })


    }

    if (loading) {
        return (
            <Modal show={show} onClose={onClose}>
                <Loading theme="dark" full={false}/>
            </Modal>
        )
    }

    return (
        <Modal show={show} onClose={onClose}>
            <h5>{t("modal.login.title")}</h5>
            <p>{t("modal.login.subtitle")} </p>
            <div className="form-group mt-3">
                <label>{t("modal.login.label.email")}</label>
                <InputIcon type="email" icon={IconEmail} className="w-100" value={credentials.email}
                           onChange={(e) => setCredentials({...credentials, email:e.target.value})}/>
            </div>
            <div className="form-group mt-3">
                <label>{t("modal.login.label.password")}</label>
                <InputPassword icon={IconPassword} className="w-100" value={credentials.password}
                               onChange={(e) => setCredentials({...credentials, password:e.target.value})}/>
            </div>
            <div className="mt-5"/>
            <button onClick={handleLogin} type="submit" className="w-100 btn-modal">{t("modal.login.button.continue")}</button>
            <p className="w-100 align-items-center text-center mt-3 cursor" onClick={recoverPassword}>{t("modal.login.rememberPassword")}</p>
            <hr/>
            <p className="w-100 align-items-center text-center">{t("modal.login.haveAccount")}</p>
            <button onClick={switchModals} type="submit" className="w-100 btn-modal">{t("modal.login.button.create")}</button>
        </Modal>
    )
}