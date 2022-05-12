import React from 'react';

function SearchResultRow({result}) {
    return (
        <li><a href="/playlist">Test - {result.name}</a></li>
    );
}

export default SearchResultRow;