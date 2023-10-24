/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: 'https://mock.apifox.cn/m1/3421431-0-default',
      },
    ],
  },
}

module.exports = nextConfig


// module.exports = {

//   async rewrites() {
//     return [
//      //接口请求 前缀带上/api-text/
//       { source: '/api-local/:path*', destination: `http://127.0.0.1:4523/:path*` },

//     ]
//   },
//   }
