const common = {
    httpTimeout:3000,
	API_BASE_URL:JSON.stringify("https://timeline.proadap.xyz"),
};

module.exports = {

	// 开发环境变量
	dev: {
		env: {
			TYPE: JSON.stringify('dev'),
			...common
		}
	},

	// 生产环境变量
	build: {
		env: {
			TYPE: JSON.stringify('prod'),
			...common
		}
	}
};