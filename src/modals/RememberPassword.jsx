import React, {useContext, useState} from "react"
import {useTranslation} from "next-i18next"

import { Loading } from "@components/Loading"
import {Modal} from "@components/Modal"
import {InputIcon} from "@components/Form/InputIcon"
import {AlertContext} from "@providers/AlertContext"
import {Axios} from "@config"

import IconEmail from "@assets/svg/modal-register/icon-email.svg"


export const ModalsRememberPassword = ({show, onClose}) => {

    const { t } = useTranslation("common")
    const {notificationAlert} = useContext(AlertContext)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")

    const handleSubmit = () => {

        if (email === "") {
            return
        }

        setLoading(true)

        const data = new FormData()
        data.append("email", email)

        Axios.post("/users/recover", data).then((response)=>{
            setLoading(false)
            onClose()
            notificationAlert(t("modal.recover.confirmation"), t("modal.recover.text"))
        }).catch(()=>{
            setLoading(false)
            onClose()
            notificationAlert(t("modal.recover.confirmation"), t("modal.recover.text"))
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
            <h5>{t("modal.recover.title")}</h5>
            <p>{t("modal.recover.subtitle")} </p>
            <div className="form-group mt-3">
                <label>{t("modal.login.label.email")}</label>
                <InputIcon type="email" icon={IconEmail} className="w-100" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mt-5"/>
            <button onClick={handleSubmit} type="submit" className="w-100 btn-modal">{t("modal.recover.button")}</button>
        </Modal>
    )
}