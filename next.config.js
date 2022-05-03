const baseUrl = process.env.IS_DEVELOPMENT ? '' : '/pando'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: baseUrl,
  assetPrefix: baseUrl,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    API_URL: 'http://localhost:4200',
  },
}

module.exports = nextConfig
