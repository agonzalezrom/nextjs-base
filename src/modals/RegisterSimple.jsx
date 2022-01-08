import React, {useContext, useEffect, useRef, useState} from "react"
import {useTranslation} from "next-i18next"
import ReCAPTCHA from "react-google-recaptcha"
import {signIn} from "next-auth/react"

import {AlertContext} from "@providers/AlertContext"
import { Modal } from "@components/Modal"
import { Loading } from "@components/Loading"
import {InputIcon} from "@components/Form/InputIcon"
import {InputPassword} from "@components/Form/InputPassword"
import {Axios} from "@config"

import IconFullName from "@assets/svg/modal-register/icon-fullname.svg"
import IconEmail from "@assets/svg/modal-register/icon-email.svg"
import IconPassword from "@assets/svg/modal-register/icon-password.svg"
import IconPhone from "@assets/svg/modal-register/icon-phone.svg"

export const ModalsRegisterSimple = ({show, onClose, switchModals}) => {

    const { t } = useTranslation("common")
    const {successAlert, errorAlert} = useContext(AlertContext)

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({
        name: null,
        lastname: null,
        email: null,
        phone: null,
        password: null,
        captcha: null
    })

    const [loading, setLoading] = useState(false)
    const recaptchaRef = useRef()

    useEffect(()=>{
        setErrors({...errors, name: null, captcha: null})
    },[name])

    useEffect(()=>{
        setErrors({...errors, lastname: null, captcha: null})
    },[lastname])

    useEffect(()=>{
        setErrors({...errors, email: null, captcha: null})
    },[email])

    useEffect(()=>{
        setErrors({...errors, phone: null, captcha: null})
    },[phone])

    useEffect(()=>{
        setErrors({...errors, password: null, captcha: null})
    },[password])

    const handleSubmit = () => {

        let _errors = 0
        let update = {...errors}
        const recaptchaValue = recaptchaRef.current?.getValue();

        if (recaptchaValue === "") {
            update = {...update, captcha: t("modal.register.error.robot")}
            _errors++
        }

        if(name === "")
        {
            update = {...update, name: t("modal.register.error.name")}
            _errors++
        }

        if(lastname === "")
        {
            update = {...update, lastname: t("modal.register.error.lastname")}
            _errors++
        }

        if(email === "")
        {
            update = {...update, email: t("modal.register.error.email")}
            _errors++
        }

        if(phone === "")
        {
            update = {...update, phone: t("modal.register.error.phone")}
            _errors++
        }

        if(password === "")
        {
            update = {...update, password: t("modal.register.error.password")}
            _errors++
        }

        if(_errors>0)
        {
            setErrors(update)
            return
        }

        setLoading(true)

        const data = new FormData()
        data.append("name", name)
        data.append("lastname", lastname)
        data.append("email", email)
        data.append("phone", phone)
        data.append("password", password)
        Axios.post("/users", data).then((response) => {
            if (response.status === 201) {
                setLoading(false)
                successAlert("Completed", "Welcome aboard!", ()=>{
                    const config = {
                        redirect: false,
                        email: email,
                        password: password
                    }
                    signIn('credentials', config).then((e) => {
                        window.location.reload()
                    })
                })
            }
        }).catch(()=>{
            errorAlert("Error", "Try again later")
        })
    }

    if (loading) {
        return (
            <Modal show={show} onClose={onClose}>
                <Loading theme={"dark"} full={false}/>
            </Modal>
        )
    }

    return (
        <Modal show={show} onClose={onClose}>
            <h5>{t("modal.register.title")}</h5>
            <p>{t("modal.register.subtitle")}</p>
                <div className="form-group mt-3">
                    <label>{t("modal.register.label.name")}</label>
                    <InputIcon type="text" icon={IconFullName} className="w-100" value={name}
                               onChange={(e) => setName(e.target.value)}/>
                    {errors.name && <div className="mt-2 alert alert-danger">
                        {errors.name}
                    </div>}
                </div>

                <div className="form-group mt-3">
                    <label>{t("modal.register.label.lastname")}</label>
                    <InputIcon type="email" icon={IconFullName} className="w-100" value={lastname}
                               onChange={(e) => setLastname(e.target.value)}/>
                    {errors.lastname && <div className="mt-2 alert alert-danger">
                        {errors.lastname}
                    </div>}
                </div>

                <div className="form-group mt-3">
                    <label>{t("modal.register.label.email")}</label>
                    <InputIcon type="email" icon={IconEmail} className="w-100" value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    {errors.email && <div className="mt-2 alert alert-danger">
                        {errors.email}
                    </div>}
                </div>
                <div className="form-group mt-3">
                    <label>{t("modal.register.label.phone")}</label>
                    <InputIcon type="tel" icon={IconPhone} className="w-100" value={phone}
                               onChange={(e) => setPhone(e.target.value)} maxLength={10}/>
                    {errors.phone && <div className="mt-2 alert alert-danger">
                        {errors.phone}
                    </div>}
                </div>
                <div className="form-group mt-3">
                    <label>{t("modal.register.label.password")}</label>
                    <InputPassword icon={IconPassword} className="w-100" value={password}
                                   onChange={(e) => setPassword(e.target.value)} autoComplete="new-password"/>
                    {errors.password && <div className="mt-2 alert alert-danger">
                        {errors.password}
                    </div>}
                </div>
            <div className="row mt-3" />
            <div className={"d-flex justify-content-center"}><ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
                theme={"white"}
            /></div>
            {errors.captcha && <div className="mt-2 alert alert-danger">
                {errors.captcha}
            </div>}
            <div className="row mt-3"/>
            <button onClick={handleSubmit} className="w-100 btn-modal">{t("modal.register.button.signup")}</button>
            <div className="mt-3"/>
            <p className="w-100 text-center">{t("modal.register.button.agree")}</p>
            <hr/>
            <p className="w-100 align-items-center text-center">{t("modal.register.button.haveAccount")}</p>
            <button onClick={switchModals} type="submit" className="w-100 btn-modal">{t("modal.register.button.login")}</button>

        </Modal>
    )
}