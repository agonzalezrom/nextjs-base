module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true,
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: 'never',
            priority: 0.5,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
    }
}