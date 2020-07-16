import React, { useState, Fragment } from 'react';
import LocationBlock from '../Location/LocationBlock';
import SearchResult from '../Search/SearchResult';
import { connect } from 'react-redux';
import { searchLocation } from '../../actions/location';
import { clear } from '../../actions/location';

const Searchbar = ({ searchLocation, flag, clear }) => {
  const [text, setText] = useState('');

  const onChange = (query) => {
    setText(query);
    //console.log(query);
    searchLocation(query);
  };

  return (
    <Fragment>
      <h2 className='search-header'>
        Bari<span>Koi</span>
      </h2>

      <div className='search'>
        <form>
          <div className='input-container'>
            <input
              type='text'
              placeholder='Search Location...'
              value={text}
              onChange={(e) => onChange(e.target.value)}
            />

            <img
              src={require('../../images/cross.svg')}
              alt=''
              className='icon close'
              onClick={() => {
                setText('');
                clear();
              }}
            />
          </div>
        </form>
      </div>

      {flag ? <LocationBlock /> : <SearchResult />}
    </Fragment>
  );
};

const mapStatetoProps = (state) => ({
  flag: state.location.flag,
});

export default connect(mapStatetoProps, { searchLocation, clear })(Searchbar);
