const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || ''

module.exports = {
    siteUrl: siteUrl,

    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', disallow: '/secret' },
            { userAgent: '*', allow: '/' },
        ],
    },
    exclude: [],
}
