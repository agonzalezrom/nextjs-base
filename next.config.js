const withImages = require("next-images")
const withPWA = require('next-pwa')
const { i18n } = require('./next-i18next.config')

const config = {
    webpack5: true,
    images: {
        disableStaticImages: true
    },
    inlineImageLimit: false,
    i18n,
    experimental: {
        styledComponents: true
    },
    pwa: {
        dest: 'public'
    }
}

module.exports = withImages(withPWA(config))
