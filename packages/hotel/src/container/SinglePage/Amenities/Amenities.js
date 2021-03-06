import React from 'react';
import PropTypes from 'prop-types';
import Heading from '@iso/ui/Heading/Heading';
import TextLink from '@iso/ui/TextLink/TextLink';
import {
  FaWifi,
  FaCarAlt,
  FaSwimmer,
  FaAirFreshener,
  FaBed,
} from 'react-icons/fa';
import IconCard from '@hotel/components/IconCard/IconCard';
import AmenitiesWrapper, { AmenitiesArea } from './Amenities.style';
import { TextButton } from '../SinglePageView.style';
import { Element } from 'react-scroll';

const Amenities = ({ titleStyle, linkStyle, amenities }) => {
  return (
    <Element name="amenities" className="Amenities">
      <AmenitiesWrapper>
        <Heading as="h2" content="Amenities" {...titleStyle} />
        <AmenitiesArea>
          {amenities.wifiAvailability && (
            <IconCard icon={<FaWifi />} title="Free wifi" />
          )}
          {amenities.parkingAvailability && (
            <IconCard icon={<FaCarAlt />} title="Free parking" />
          )}
          {amenities.poolAvailability && (
            <IconCard icon={<FaSwimmer />} title="Free pool" />
          )}
          {amenities.airCondition && (
            <IconCard icon={<FaAirFreshener />} title="Air Freshener" />
          )}
          {amenities.extraBedFacility && (
            <IconCard icon={<FaBed />} title="Extra bed facility" />
          )}
        </AmenitiesArea>
        <TextButton>
          <TextLink link="#1" content="Show all amenities" {...linkStyle} />
        </TextButton>
      </AmenitiesWrapper>
    </Element>
  );
};

Amenities.propTypes = {
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

Amenities.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: ['17px', '20px', '25px'],
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: ['14px', '20px', '30px'],
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#008489',
  },
};

export default Amenities;
