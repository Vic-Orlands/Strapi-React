import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import usePost from '../../hooks/usePost';
import classes from './home.module.css';

export default function Homepage() {
	const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*');

	const { signup, signupError, signupMsg, signupLoading, handleChange, handleSignup } = usePost(
		'http://localhost:1337/api/email'
	);

	if (loading && signupLoading) return <p> Loading... </p>;
	if (error) return <p> Error :( </p>;

	return (
		<div className={classes['home']}>
			<section>
				<h2>Welcome to our Estate</h2>

				<hr className={classes['horizontal-rule']} />

				<p>We help you find your new home</p>

				<form className={classes['home-form']} onSubmit={handleSignup}>
					<h5>Interested in joining our Newsletter</h5>
					<h6>Sign up with your email below</h6>

					<label htmlFor="email">
						{signupError ? <p> {signupError} </p> : null}
						Email Address:
						<input type="email" name="email" value={signup} onChange={handleChange} />
						{signupMsg ? <p> Thanks for signing up!</p> : null}
					</label>

					<button>Signup</button>
				</form>

				{estate.splice(0, 2).map((house) => (
					<article className={classes['home-article']} key={house.id}>
						<h2>{house.attributes.name}</h2>

						<section className={classes['home-article-description']}>
							<img
								src={`http://localhost:1337${house.attributes.image.data[0].attributes.url}`}
								alt="img"
							/>

							<div>
								<p>{house.attributes.price}</p>

								<p>{house.attributes.description}</p>

								<Link to={`estates/${house.id}`}>See More...</Link>
							</div>
						</section>
					</article>
				))}
			</section>
		</div>
	);
}
