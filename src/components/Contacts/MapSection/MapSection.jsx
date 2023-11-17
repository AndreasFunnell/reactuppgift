import React from 'react';
import img_map from '../../../assets/images/map.png';
import './MapSection.css';

const MapSection = () => {
  const mapLink = 'https://www.google.com/maps/place/Sveav%C3%A4gen+31,+111+34+Stockholm/@59.3366397,18.0594356,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9d6799554e87:0x6562d2c842903003!8m2!3d59.336637!4d18.0620105!16s%2Fg%2F11c0rp4jyr?entry=ttu'; 

  return (
    <section className="map-section">
      <a href={mapLink} target="_blank" rel="noopener noreferrer">
        <img className="map-image" src={img_map} alt="Clickable Map" />
      </a>
    </section>
  );
};

export default MapSection;
