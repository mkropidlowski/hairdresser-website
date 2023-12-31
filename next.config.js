module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        unoptimized: true,
        domains: ["images.unsplash.com"],
    },
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true, // for testing delete after all
    },
};
