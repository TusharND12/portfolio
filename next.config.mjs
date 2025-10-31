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
  webpack: (config) => {
    config.externals.push({
      'bufferutil': 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });
    return config;
  },
};

export default nextConfig;

