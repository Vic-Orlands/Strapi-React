import { useState } from 'react';
import axios from 'axios';

const usePost = (url) => {
	const [ signup, setSignup ] = useState('');
	const [ signupError, setError ] = useState(null);
	const [ signupMsg, setSignupMsg ] = useState('');
	const [ signupLoading, setSignupLoading ] = useState(true);

	const handleChange = (e) => {
		setSignup(e.target.value);
	};

	const handleSignup = (e) => {
		e.preventDefault();

		let userData = {
			to: signup,
			from: 'chimezieinnocent39@gmail.com',
			replyTo: 'chimezieinnocent39@gmail.com',
			subject: 'Thanks for signing up',
			html:
				"​<h3>Hi!,</h3> <p>You've been subscribed to our primary newsletter. You can expect to receive an email from us every few weeks, sharing the new things that we've published and new houses to check out. Occasionally, We'll share unique newsletter-only content as well</p><p>Thanks for choosing us!</p>"
		};

		axios
			.post(url, userData)
			.then((res) => {
				setSignup(res);
				setSignupMsg(true);
				setSignupLoading(false);
			})
			.catch((signupError) => {
				setError(signupError);
				setSignupLoading(false);
			});
	};

	return { signup, signupError, signupMsg, signupLoading, handleChange, handleSignup };
};

export default usePost;
