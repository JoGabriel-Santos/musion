import React from 'react';
import { useSelector } from 'react-redux';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import SongCard from '../components/SongCard';

function TopCharts() {
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const { data, isFetching, error } = useGetTopChartsQuery();

	if (isFetching) return <h2 className="heading">Loading songs...</h2>;

	if (error) return <h2 className="heading">Something went wrong. Please try again...</h2>;

	return (
		<section className="section-discover">
			<div className="container container--flex">
				<div className="discover-title">
					<span className="subheading">Top Charts</span>
					<h2 className="heading">Discover Top Charts</h2>
				</div>
			</div>

			<div className="container grid grid--4-cols">
				{data?.map((song, i) => (
					<SongCard
						key={song.key}
						song={song}
						isPlaying={isPlaying}
						activeSong={activeSong}
						data={data}
						i={i}
					/>
				))}
			</div>
		</section>
	);
}

export default TopCharts;
