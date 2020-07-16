import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../actions/location';
import { getNearby } from '../../actions/location';
import NearByItem from './NearByItem';

const SearchResult = ({ foundLocation, getNearby }) => {
  const [flag, setFlag] = useState(false);
  const onClick = (e) => {
    //console.log(e.target.name);
    //console.log(foundLocation.longitude);
    getNearby(e.target.name, foundLocation.longitude, foundLocation.latitude);
    setFlag(true);
  };
  return (
    <Fragment>
      {foundLocation && (
        <div className='search-content'>
          <div>
            <h3>{foundLocation.address.split(',')[0]}</h3>
            <p>
              {foundLocation.address.split(',')[1] && ','}
              {foundLocation.address.split(',')[2] && ','} {foundLocation.area},{' '}
              {foundLocation.city}
            </p>
            <p>{foundLocation.pType}</p>

            <span>Place Code : {foundLocation.ucode} </span>
          </div>

          <div className='tags'>
            <button name='food' onClick={onClick}>
              Food
            </button>
            <button name='bank' onClick={onClick}>
              Bank
            </button>
            <button name='healthcare' onClick={onClick}>
              Healthcare
            </button>
            <button name='education' onClick={onClick}>
              Education
            </button>
            <button name='hotel' onClick={onClick} className='r-margin'>
              Hotel
            </button>
          </div>
          {flag ? <NearByItem /> : ''}
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  foundLocation: state.location.foundLocation,
});

export default connect(mapStateToProps, { getLocation, getNearby })(
  SearchResult
);
