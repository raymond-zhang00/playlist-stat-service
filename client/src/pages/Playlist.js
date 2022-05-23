import React from 'react';
import { useSearchParams } from 'react-router-dom';

function PlaylistPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  //console.log(searchParams.get("id"));

  let fetchConfig = {
    method: "GET"
  }

  return (
    <>
      <h1>Playlist Breakdown</h1>
      <p>Here are the stats for the playlist.</p>
    </>
  );
}

export default PlaylistPage;