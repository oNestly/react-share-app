import React, { useState, useEffect } from 'react';

import MasonryLayout from './MasonryLayout.jsx'
import { client } from '../client.js';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner.jsx';

const Search = ({ searchTerm, searchSubmit }) => {
	const [pins, setPins] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			if(searchTerm) {
				setLoading(true);
				const query = searchQuery(searchTerm.toLowerCase())
	
				client.fetch(query)
				.then((data) => {
					setPins(data);
					setLoading(false);
				})
			} else {
				client.fetch(feedQuery)
					.then((data) => {
						setPins(data);
						setLoading(false);
					})
			}
		}, 550);
		return () => clearTimeout(timer);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm])
	

	return (
		<div>
			{loading && <Spinner message='Searching for pins...' additional={'pt-10'} />}
			{pins?.length !== 0 && <MasonryLayout pins={pins} />}
			{pins?.length === 0 && searchTerm !== '' && !loading && (
				<div className='mt-10 text-center text-xl'>
					No pins found
				</div>
			)}
		</div>
	)
}

export default Search;