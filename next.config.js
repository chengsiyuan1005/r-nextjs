/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
