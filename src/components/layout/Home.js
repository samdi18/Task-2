import React from 'react';
import Searchbar from './Searchbar';
import MapContainer from './MapContainer';

const Home = () => {
  return (
    <div className='home-grid'>
      <div className='search-info container'>
        <Searchbar />
      </div>

      <MapContainer />
    </div>
  );
};

export default Home;
