import {Icon, Marker, LayerGroup} from 'leaflet';
import {TCity, TOffer} from '../../types/types';
import {MarkerUrl} from '../../constants/constants';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';

import 'leaflet/dist/leaflet.css';

type TMapProps = {
  offers: TOffer[];
  secondary–°lassName: string;
  city: TCity;
  selectedOffer: TOffer | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrl.Default,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerUrl.Current,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({offers, city, selectedOffer, secondary–°lassName} : TMapProps) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const layer: LayerGroup = new LayerGroup();

    if (map) {
      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;

        const marker = new Marker({
          lat: latitude,
          lng: longitude
        });

        marker
          .setIcon(
            selectedOffer && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(layer);
      });

      layer.addTo(map);

      return () => {
        map.removeLayer(layer);
      };
    }
  }, [map, offers, selectedOffer]);

  useEffect(() => {
    if (map) {
      map.flyTo({lat: city.location.latitude, lng: city.location.longitude});
    }
  }, [city]);

  return (
    <section className={`${secondary–°lassName} map`} ref={mapRef}></section>
  );
}

export default Map;
