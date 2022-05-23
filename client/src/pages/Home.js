import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import SearchResults from '../components/SearchResults';
import results from '../data/testresults';

function HomePage() {

  const [searchResults, setSearched] = useState(false);
  const performSearch = async (event) =>{
    event.preventDefault();

    let fetchConfig = {
      method: "GET"
    }

    let response = await fetch(`/api/playlist-search?search=${encodeURIComponent(event.target.searchtext.value)}`, fetchConfig);
    console.log("INITIAL RESPONSE: " + response);
    let playlistList = await response.json();
    setSearched(playlistList);
    console.log("ULTIMATE RESPONSE: " + searchResults);
  }

  return (
    <>
      <h1>Playlist Search</h1>
      <p>Use the public playlist search to select a playlist you would like to see statistics for</p>
      <form className="search-bar" onSubmit={performSearch}>
        <div>
          <input type="text" name="searchtext"/>
          <button><IoIosSearch /></button>
        </div>
      </form>
      {searchResults
        ? <SearchResults playlistList={searchResults}/>
        : <p>Submit a search to see playlists</p>
      }
    </>
  );
}

export default HomePage;