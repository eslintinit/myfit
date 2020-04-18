require('dotenv').config()
const path = require('path')
const withPWA = require('next-pwa')
// const withImages = require('next-images')

module.exports = withPWA({
  target: 'serverless',
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
  pwa: {
    dest: 'public',
  },
})
