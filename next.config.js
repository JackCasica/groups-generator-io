/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.unsplash.com",
			},
		],
	},
	experimental: {
		userAgentMetadata: true,
	},
};

module.exports = nextConfig;
