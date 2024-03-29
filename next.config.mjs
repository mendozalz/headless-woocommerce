/** @type {import('next').NextConfig} */
import withVideos from "next-videos";


const nextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/api/(.*)",

        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },

          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },

          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",

        port: "",

        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "test.mincaelectric.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localy.local",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    esmExternals: "loose",
  },
  async redirects() {
    return [
      {
        source: '/accesorios',
        destination: '/',
        permanent: true,
      },
      {
        source: '/productos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/especificaciones',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ebikes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/especificaciones-ebikes',
        destination: '/',
        permanent: true,
      },
      
    ]
  },
};

export default withVideos(nextConfig);
