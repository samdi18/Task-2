import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { connect } from 'react-redux';

const MapContainer = ({ foundLocation, nearby }) => {
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: foundLocation ? parseFloat(foundLocation.latitude) : 23.8737,
    lng: foundLocation ? parseFloat(foundLocation.longitude) : 90.3964,
  };

  // const initialCenter = {
  //   lat: 23.8737,
  //   lng: 90.3964,
  // };

  //console.log(`${nearby} is map here`);

  return (
    <div>
      <LoadScript googleMapsApiKey='AIzaSyBQgrbtwBIq1qPpl7VCcUQDOaLCq-m9zYI'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {foundLocation && (
            <Marker
              position={{
                lat: parseFloat(foundLocation.latitude),
                lng: parseFloat(foundLocation.longitude),
              }}
              color='green'
            />
          )}

          {nearby &&
            nearby.map((item) => (
              <Marker
                position={{
                  lat: parseFloat(item.latitude),
                  lng: parseFloat(item.longitude),
                }}
                icon={{
                  url:
                    'https://img.icons8.com/ultraviolet/40/000000/marker.png',
                }}
              />
            ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

const mapStateToProps = (state) => ({
  foundLocation: state.location.foundLocation,
  nearby: state.location.nearby,
});

export default connect(mapStateToProps)(MapContainer);
