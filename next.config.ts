import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Silence turbopack root warning caused by multiple lockfiles in monorepo
  turbopack: {
    root: __dirname,
  },

  // Strict mode for better DX and catching bugs early
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // Add external domains here if needed in future
    // remotePatterns: [],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  // Redirect www to apex domain
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.danuindra.com' }],
        destination: 'https://danuindra.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
