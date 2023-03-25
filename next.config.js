/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    return config
  },
  images: {
    domains: [
      'kiyohken2000.web.fc2.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/speak',
        destination: 'https://api.uberduck.ai/speak',
      },
      {
        source: '/speak-status',
        destination: 'https://api.uberduck.ai/speak-status',
      },
      {
        source: '/speak-play/:path*',
        destination: 'https://uberduck-audio-outputs.s3-us-west-2.amazonaws.com/:path*',
      },
    ];
  },
}

module.exports = nextConfig
