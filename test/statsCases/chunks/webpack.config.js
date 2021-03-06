module.exports = {
	entry: "./index",
	profile: true,
	stats: {
		reasons: true,
		chunkModules: true,
		chunkOrigins: true,
		modules: true,
		cached: true,
		cachedAssets: true,
		source: true,
		errorDetails: true,
		publicPath: true,
		excludeModules: [
			/e\.js/
		]
	}
};