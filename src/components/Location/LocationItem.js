import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../actions/location';

const LocationItem = ({ location, getLocation }) => {
  const address = Object.entries(location.address.split(','));
  const name = Object.fromEntries(address)[0];
  const address1 = Object.fromEntries(address)[1];
  const address2 = Object.fromEntries(address)[2];

  const onClick = (e) => {
    //console.log(location.id);
    getLocation(location.id);
  };
  return (
    <Fragment>
      <li>
        <div className='location-item' onClick={onClick}>
          <img
            src={require('../../images/location.svg')}
            alt=''
            className='icon'
          />

          <div className='location-info'>
            <h4>{name}</h4>
            <p>
              {address1 && address1} {address2 && address2}{' '}
              {(address1 && ', ') || (address2 && ', ')}
              {location.area}, {location.city}
            </p>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default connect(null, { getLocation })(LocationItem);
