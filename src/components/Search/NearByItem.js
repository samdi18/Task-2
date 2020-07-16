import React from 'react';
import { connect } from 'react-redux';

const NearByItem = ({ nearby }) => {
  const nearbyItems =
    nearby &&
    nearby.map(
      (item) => (
        <li key={item.id}>
          <div className='nearby-info'>
            <p>{item.Address}</p>
          </div>
        </li>
      )
      //console.log({ nearby });
    );
  return (
    <div className='nearby-content'>
      <ul className='scroll'>{nearbyItems}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nearby: state.location.nearby,
});
export default connect(mapStateToProps)(NearByItem);
