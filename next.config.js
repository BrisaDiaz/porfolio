/** @type {import('next').NextConfig} */
import WithBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}
export default WithBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(nextConfig)