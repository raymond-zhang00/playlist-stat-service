import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import SearchResults from '../components/SearchResults';

function HomePage() {
  return (
    <>
      <h1>Playlist Search</h1>
      <p>Use the public playlist search to select a playlist you would like to see statistics for.</p>
      <form className="search-bar" action="" method="POST">
        <div>
          <input type="text" name="playlist" />
          <button><IoIosSearch /></button>
        </div>
      </form>
      <SearchResults/>
    </>
  );
}

export default HomePage;