/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true, // helps debugging
      ssr: true,
      fileName: true,
      minify: false // ← this disables minification
    },
  }
};

export default nextConfig;
