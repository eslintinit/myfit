require('dotenv').config()
const webpack = require('webpack')
const withPWA = require('next-pwa')
const path = require('path')
const nextSourceMaps = require('@zeit/next-source-maps')()
// const withImages = require('next-images')

module.exports = nextSourceMaps(
  withPWA({
    // target: 'serverless',
    env: {
      DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
      SENTRY_DSN: process.env.SENTRY_DSN,
    },
    webpack(config, { isServer, buildId }) {
      config.resolve.modules.push(path.resolve('./'))

      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      })

      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
        }),
      )

      if (!isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser'
      }

      return config
    },
    pwa: {
      dest: 'public',
    },
  }),
)
