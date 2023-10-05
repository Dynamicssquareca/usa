/** @type {import('next').NextConfig} */
      const nextConfig = {
        reactStrictMode: true,
        swcMinify: true,
        trailingSlash: true,
        images: {
          formats: ['image/avif', 'image/webp'],
          domains: ['blognew.dynamicssquare.com']
         },
         env:{
          BACKEND_URL:'https://blognew.dynamicssquare.com'
        }
      }
module.exports = nextConfig
