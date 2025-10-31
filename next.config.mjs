/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  // Enable static export for GitHub Pages
  output: 'export',
  // Base path for GitHub Pages (repository name)
  basePath: '/portfolio',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
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

