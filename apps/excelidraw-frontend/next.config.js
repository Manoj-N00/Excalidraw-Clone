/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  distDir: '.next',
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'pino-pretty': false,
    };

    return config;
  },
};

  
  export default nextConfig;
  