/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    experimental: {
      turbo: {
        resolveAlias: {
          '@repo/ui': require.resolve('@repo/ui'),
          '@repo/common': require.resolve('@repo/common')
        }
      }
    },
    output: 'standalone'
  };
  
  export default nextConfig;
  