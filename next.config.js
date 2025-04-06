// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/your-repo-name/' : '',
  basePath: isProd ? '/your-repo-name' : '',
  trailingSlash: true,
}
