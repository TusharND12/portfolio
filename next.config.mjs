/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  // Only enable static export for GitHub Pages builds (not in development)
  ...(isGitHubPages ? { output: 'export' } : {}),
  // Base path only for GitHub Pages (not in development)
  ...(isGitHubPages ? { basePath: '/portfolio' } : {}),
  // Disable image optimization for static export (only when building for export)
  images: {
    unoptimized: isGitHubPages,
  },
  // Remove trailing slash for better compatibility
  trailingSlash: false,
  // Disable ESLint during builds for GitHub Pages
  ...(isGitHubPages && { eslint: { ignoreDuringBuilds: true } }),
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, { isServer }) => {
    config.externals.push({
      'bufferutil': 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });
    
    // Fix for chunk loading errors
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Optimize chunk splitting for large components like Universe
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Separate vendor chunks
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          // Separate React Three Fiber (large library)
          r3f: {
            name: 'r3f',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@react-three|three)[\\/]/,
            priority: 30,
          },
        },
      },
    };
    
    return config;
  },
};

export default nextConfig;

