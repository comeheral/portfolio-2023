/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/foundation/variables.scss";`
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.comeheral.fr',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://api.comeheral.fr',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig