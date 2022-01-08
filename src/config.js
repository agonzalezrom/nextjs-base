import axios from "axios"
import { getSession } from "next-auth/react"

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}


const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SITE_BE + "/api"
})

// Client-side-only code
if (process.browser) {
    async function getToken() {
        const session = await getSession()
        return session?.jwt
    }
    getToken().then(jwt => {
        if(typeof jwt === "string")
            Axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
    })
}

Axios.defaults.headers.common['Accept'] = 'application/json'
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
Axios.defaults.headers.put['Content-Type'] = 'application/json'

export {Axios}


export const customSelectStyles = {
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? '#ccc' : state.isFocused ? '#f3f3f3' : 'white',
    }),
    control: (provided, state) => ({
        ...provided,
        border: state.isHover ? '2px solid #ccc' : "1px solid #ccc",
        boxShadow: '0 0 0 1px #d7b287',
        borderColor: state.isFocused ? '#ccc' : state.isHover ? '#ccc' : 'white'
    })
}

