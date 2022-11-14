import {Icon, Marker} from 'leaflet';
import {TCity, TOffer} from '../../types/types';
import {MarkerUrl} from '../../constants/constants';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';

import 'leaflet/dist/leaflet.css';

type TMapProps = {
  secondaryСlassName: string;
  city: TCity;
  offers: TOffer[];
  selectedOffer: TOffer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrl.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerUrl.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, offers, selectedOffer, secondaryСlassName}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section className={`${secondaryСlassName} map`} ref={mapRef}></section>
  );
}

export default Map;
