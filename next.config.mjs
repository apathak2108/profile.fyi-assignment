/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // if true, will use 308 HTTP status code, else 307
      },
    ];
  },
};

export default nextConfig;
