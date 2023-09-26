/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/foundation/variables.scss";`
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