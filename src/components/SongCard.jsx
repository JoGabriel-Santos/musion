import React from 'react';

// import PlayPause from './PlayPause';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

function SongCard({ song, isPlaying, activeSong, data, i }) {
	const dispatch = useDispatch();

	const handlePauseClick = () => {
		dispatch(playPause(false));
	};

	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }));
		dispatch(playPause(true));
	};

	return (
		<div className="song">
			<img className="song-image" src={song.images?.coverart} alt="" />

			<div className="song-content">
				<p className="song-title">{song.title}</p>
				<p className="song-artist">{song.subtitle}</p>
			</div>
		</div>
	);
}

export default SongCard;
