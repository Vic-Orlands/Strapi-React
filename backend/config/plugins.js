module.exports = ({ env }) => ({
	// ...
	email: {
		config: {
			provider: 'sendgrid',
			providerOptions: {
				apiKey: env('SENDGRID_API_KEY')
			},
			settings: {
				defaultFrom: 'chimezieinnocent39@gmail.com',
				defaultReplyTo: 'chimezieinnocent39@gmail.com',
				testAddress: 'chimezieinnocent39@gmail.com'
			}
		}
	}
	// ...
});
