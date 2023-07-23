/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i1.ytimg.com',
                pathname: '/**',
            },
        ],
    },
    distDir: 'build'
}

module.exports = nextConfig
