/** @type {import('next').NextConfig} */

const nextConfig = {
  staticPageGenerationTimeout: 1000,
  // experimental: {
  //   missingSuspenseWithCSRBailout: false,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dur8zyxon/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
