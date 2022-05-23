import React from 'react';
import { Link } from 'react-router-dom';

function SearchResultRow({playlist}) {
    return (
        <li>
            <Link to={`/playlist?id=${playlist.id}`}>
                <img src={playlist.images[0].url} alt="Playlist" style={{width:"70px",height:"70px"}}/> 
                <span>{playlist.name}</span>
            </Link>
        </li>
    );
}

export default SearchResultRow;