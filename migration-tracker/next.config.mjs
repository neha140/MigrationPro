

  /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // This helps with Amplify deployments
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: false,
}

module.exports = nextConfig
