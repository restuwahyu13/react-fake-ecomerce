const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
	app.use(
		'/api_v1',
		createProxyMiddleware({
			target: 'http://localhost:8700',
			secure: false,
			changeOrigin: true,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-control-Allow-Methods': '*',
				'Access-Control-Allow-Headers': '*'
			}
		})
	)
}
