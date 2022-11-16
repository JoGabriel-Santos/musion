import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice';
import { genres } from '../assets/constants';

import SongCard from '../components/SongCard';

function Discover() {
	const dispatch = useDispatch();
	const { genreListId } = useSelector((state) => state.player);
	const { activeSong, isPlaying } = useSelector((state) => state.player);
	const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
	const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

	if (isFetching) return <h2 className="heading">Loading songs...</h2>;

	if (error) return <h2 className="heading">Something went wrong. Please try again...</h2>;

	return (
		<section className="section-discover">
			<div className="container container--flex">
				<div className="discover-title">
					<span className="subheading">Discover {genreTitle} songs</span>
					<h2 className="heading">The week's most popular current songs</h2>
				</div>

				<form className="discover-form">
					<div>
						<select
							onChange={(e) => dispatch(selectGenreListId(e.target.value))}
							value={genreListId || 'pop'}
						>
							{genres.map((genre) => (
								<option key={genre.value} value={genre.value}>
									{genre.title}
								</option>
							))}
						</select>
					</div>
				</form>
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

export default Discover;
