import axios from "axios"
import { getSession } from "next-auth/client"

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
        return session?.accessToken
    }
    getToken().then((token)=>{
        Axios.defaults.headers.common['Authorization'] = typeof token === "string" ? `Bearer ${token}` : null
    })
}

Axios.defaults.headers.common['Accept'] = 'application/json'
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
Axios.defaults.headers.put['Content-Type'] = 'application/json'

export {Axios}