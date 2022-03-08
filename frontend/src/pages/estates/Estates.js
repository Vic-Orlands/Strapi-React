import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import classes from './estates.module.css';

export default function Estatepage() {
	const { estate, error, loading } = useFetch('http://localhost:1337/api/estates?populate=*');

	if (loading) return <p> Loading... </p>;
	if (error) return <p> Error :( </p>;

	return (
		<div className={classes['estates']}>
			<section>
				<h2>Available Houses</h2>

				<hr className={classes['horizontal-rule']} />

				{estate.map((house) => (
					<article className={classes['article']} key={house.id}>
						<h2>{house.attributes.name}</h2>

						<section className={classes['article-description']}>
							<img
								src={`http://localhost:1337${house.attributes.image.data[0].attributes.url}`}
								alt="img"
							/>

							<div>
								<p>{house.attributes.price}</p>

								<p>{house.attributes.description}</p>

								<Link to={`${house.id}`}>See More...</Link>
							</div>
						</section>
					</article>
				))}
			</section>
		</div>
	);
}
