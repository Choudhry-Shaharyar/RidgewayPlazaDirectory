import React from 'react';
import './Map.css';

const InteractiveMap = () => {
  return (
    <div className="map-container">
      <h2>Interactive Map</h2>
      <iframe
        className='mapIframe'
        src="https://maker.mappedin.com/map/6570dfeafd001d626819c691"
        style={{ border: '2px #8080801a solid' }}
        name="myiFrame"
        scrolling="no"
        frameBorder="1"
        marginHeight="0"
        marginWidth="0"
        height="400px"
        width="600px"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default InteractiveMap;
