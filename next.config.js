require('dotenv').config()
const webpack = require('webpack')
const withPWA = require('next-pwa')
const path = require('path')
const withSourceMaps = require('@zeit/next-source-maps')
const withImages = require('next-images')

module.exports = withPWA(
  withSourceMaps({
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

      return config
    },
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/app',
        },
      ]
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/app',
          permanent: true,
        },
      ]
    },
    pwa: {
      dest: 'public',
    },
  }),
)
