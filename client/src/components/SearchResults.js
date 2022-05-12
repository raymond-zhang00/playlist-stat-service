import React from 'react';
import SearchResultRow from './SearchResultRow';
import results from '../data/testresults';

function SearchResults() {
    return (
        <div className="search-results">
            <ul className="search-list">
                {results.map((result) => <SearchResultRow result={result} />)}
            </ul>
        </div>
    );
}

export default SearchResults;