/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://admin.hbmconstructions.co.uk',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
