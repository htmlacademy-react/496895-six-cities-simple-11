import {Icon, Marker} from 'leaflet';
import {TCity, TOffer} from '../../types/types';
import {MarkerUrl} from '../../constants/constants';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';

import 'leaflet/dist/leaflet.css';

type TMapProps = {
  offers: TOffer[];
  secondaryСlassName: string;
  city: TCity;
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

function Map({offers, city, selectedOffer, secondaryСlassName} : TMapProps) : JSX.Element {
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
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);


      });

      map.flyTo({lat: city.location.latitude, lng: city.location.longitude});
    }
  }, [city, map, offers, selectedOffer]);

  return (
    <section className={`${secondaryСlassName} map`} ref={mapRef}></section>
  );
}

export default Map;
