module.exports = {
	send: async (ctx) => {
		let options = ctx.request.body;

		await strapi.plugins['email'].services.email.send({
			to: options.to,
			from: 'chimezieinnocent39@gmail.com',
			replyTo: 'chimezieinnocent39@gmail.com',
			subject: options.subject,
			html: options.html
		});
		ctx.send('Email sent!');
	}
};
