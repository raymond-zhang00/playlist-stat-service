import React from 'react';
import SearchResultRow from './SearchResultRow';
//import results from '../data/testresults';

function SearchResults({playlistList}) {
    return (
        <div className="search-results">
            <ul className="search-list">
                {playlistList.map((playlist) => <SearchResultRow playlist={playlist} />)}
            </ul>
        </div>
    );
}

export default SearchResults;