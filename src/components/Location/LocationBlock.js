import React from 'react';
import LocationItem from './LocationItem';
import { connect } from 'react-redux';

const LocationBlock = ({ locations }) => {
  return (
    <div className='location-content '>
      <ul className='scroll'>
        {locations &&
          locations.map((location) => (
            <LocationItem key={location.id} location={location} />
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  locations: state.location.locations,
});

export default connect(mapStateToProps)(LocationBlock);
