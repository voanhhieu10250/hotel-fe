import React from 'react';
import { Marker } from 'react-google-maps';
import HotelInfoWindow from './MapInfoWindow';
import MakerImage from './hotelMapMarker.png';

const HotelMapMarkerCluster = props => {
  let locationArray = [];
  const { location, infoWindowToggle, isOpen, markerIndex } = props;

  if (location && location.length !== 0) {
    for (let i = 0; i < location.length; i++) {
      const id = location[i].id;
      const lat = parseFloat(location[i].lat);
      const lng = parseFloat(location[i].lng);
      const title = location[i].title;
      const thumbUrl =
        location[i].images.length > 0
          ? location[i].images[0].url
          : '/placeholder/hotel_thumb.jpg';
      const formattedAddress = location[i].formattedAddress;
      const price = location[i].price;
      const rating = location[i].rating;
      const ratingCount = location[i].ratingCount;

      locationArray.push({
        id,
        lat,
        lng,
        title,
        thumbUrl,
        formattedAddress,
        price,
        rating,
        ratingCount,
      });
    }
  }

  return locationArray.map((singlePostLoaction, index) => {
    return (
      <Marker
        key={index}
        icon={MakerImage}
        position={singlePostLoaction}
        onClick={() => {
          infoWindowToggle(singlePostLoaction.id);
        }}
      >
        {isOpen && markerIndex === singlePostLoaction.id ? (
          <HotelInfoWindow
            postData={singlePostLoaction}
            onCloseClick={() => {
              infoWindowToggle(singlePostLoaction.id);
            }}
          />
        ) : (
          ''
        )}
      </Marker>
    );
  });
};

export default HotelMapMarkerCluster;
