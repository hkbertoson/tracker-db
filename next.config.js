/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	experimental: {
		swcPlugins: [['next-superjson-plugin', {}]],
	},
};

module.exports = nextConfig;
