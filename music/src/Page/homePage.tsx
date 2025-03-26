import React, { useState, useEffect } from 'react';
import './homePage.css'; // Make sure to add the styles in this file or adjust paths
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon, faSearch, faStepBackward, faPlay, faStepForward, faHeart, faRandom, faUndo, faEllipsisH, faPause } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const HomePage: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [song, setSong] = useState<any>(null); // State to store the song data

    // Handle play/pause toggle
    const handlePlayPause = () => {
        setIsPlaying(prevState => !prevState);
    };

    // Fetch song data from Openwhyd API
    useEffect(() => {
        const fetchSongData = async () => {
            try {
                const response = await axios.get('https://openwhyd.org/adrien_ddeer/down_track'); // Replace this with actual API endpoint
                setSong(response.data); // Assuming API returns a song object
            } catch (error) {
                console.error('Error fetching song data:', error);
            }
        };

        fetchSongData();
    }, []); // Empty dependency array to run only once when component mounts

    if (!song) {
        return <div>Loading...</div>; // Show loading message until data is fetched
    }

    return (
        <div className="wrapper">
            <div className="player__container">
                <div className="player__body">
                    <div className="body__cover">
                        <ul className="list list--cover">
                            <li>
                                <a className="list__link" href="">
                                    <FontAwesomeIcon icon={faNavicon} />
                                </a>
                            </li>
                            <li>
                                <a className="list__link" href=""></a>
                            </li>
                            <li>
                                <a id="btn-search" className="list__link" href="">
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                            </li>
                        </ul>

                        {/* Display album cover dynamically from API */}
                        <img id="album-cover" src={song.albumCover} alt="Album cover" />

                        <div className="range"></div>
                    </div>

                    <div className="body__info">
                        {/* Display song name and artist from API */}
                        <div id="song-name" className="info__song">{song.name}</div>
                        <div id="song-artist" className="info__artist">{song.artist}</div>
                    </div>

                    <div className="body__buttons">
                        <ul className="list list--buttons">
                            <li><a id="btn-backward" className="list__link"><FontAwesomeIcon icon={faStepBackward} /></a></li>
                            <li><a id="btn-play-song" className="list__link" onClick={handlePlayPause}>
                                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} id="icon-play-pause" />
                            </a></li>
                            <li><a id="btn-forward" className="list__link"><FontAwesomeIcon icon={faStepForward} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="player__footer">
                    <ul className="list list--footer">
                        <li><a href="#" className="list__link"><FontAwesomeIcon icon={faHeart} /></a></li>
                        <li><a href="#" className="list__link"><FontAwesomeIcon icon={faRandom} /></a></li>
                        <li><a href="#" className="list__link"><FontAwesomeIcon icon={faUndo} /></a></li>
                        <li><a href="#" className="list__link"><FontAwesomeIcon icon={faEllipsisH} /></a></li>
                    </ul>
                </div>
            </div>
            <iframe hidden id="song" src={song.streamUrl} frameBorder="0" allowFullScreen allow="autoplay; encrypted-media"></iframe>
        </div>
    );
};

export default HomePage;
